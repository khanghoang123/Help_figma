import fs from 'node:fs';
import path from 'node:path';

const FIGMA_FILE_KEY = '6vEL6HNzFlAimVezlfl6TJ';
const FIGMA_CANVAS_ID = process.env.FIGMA_CANVAS_ID ?? '14:83';
const FIGMA_DEPTH = '20';
const FIGMA_TOKEN = process.env.FIGMA_API_KEY;

if (!FIGMA_TOKEN) {
  throw new Error('FIGMA_API_KEY is required');
}

const projectRoot = process.cwd();
const cacheDir = path.join(projectRoot, '.cache');
const outputDir = path.join(projectRoot, 'assets', 'figma');
const generatedDir = path.join(projectRoot, 'src', 'generated');
const cachedFilePath = path.join(cacheDir, 'figma-file.json');

fs.mkdirSync(cacheDir, { recursive: true });
fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(generatedDir, { recursive: true });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchWithRetry = async (url, options = {}, attempts = 6) => {
  let lastResponse;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const response = await fetch(url, options);
    lastResponse = response;
    if (response.ok) {
      return response;
    }
    if (response.status !== 429) {
      return response;
    }
    const retryAfterHeader = response.headers.get('retry-after');
    const retryMs = retryAfterHeader ? Number(retryAfterHeader) * 1000 : 2000 * attempt;
    await sleep(retryMs);
  }
  return lastResponse;
};

const fetchJson = async (url) => {
  const response = await fetchWithRetry(url, {
    headers: {
      'X-Figma-Token': FIGMA_TOKEN,
    },
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Figma request failed: ${response.status} ${body}`);
  }
  return response.json();
};

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-') || 'screen';

const chunk = (items, size) => {
  const groups = [];
  for (let index = 0; index < items.length; index += size) {
    groups.push(items.slice(index, index + size));
  }
  return groups;
};

const getInteractions = (node) => {
  const interactions = [];
  if (Array.isArray(node.interactions)) {
    interactions.push(...node.interactions);
  }
  if (Array.isArray(node.reactions)) {
    interactions.push(...node.reactions);
  }
  if (interactions.length === 0 && typeof node.transitionNodeID === 'string') {
    interactions.push({
      trigger: { type: 'ON_CLICK' },
      action: { destinationId: node.transitionNodeID },
    });
  }
  return interactions;
};

const getDestinationId = (interaction) => {
  if (Array.isArray(interaction.actions) && interaction.actions.length > 0) {
    return getDestinationId({ action: interaction.actions[0] });
  }
  const action = interaction.action ?? interaction;
  if (!action || typeof action !== 'object') {
    return null;
  }
  if (typeof action.destinationId === 'string') {
    return action.destinationId;
  }
  if (typeof action.nodeId === 'string') {
    return action.nodeId;
  }
  if (
    action.navigation &&
    typeof action.navigation === 'object' &&
    typeof action.navigation.destinationId === 'string'
  ) {
    return action.navigation.destinationId;
  }
  return null;
};

const getTimeoutMs = (interaction) => {
  const trigger = interaction.trigger ?? {};
  if (trigger.type === 'AFTER_TIMEOUT') {
    const timeout = Number(trigger.timeout ?? 1.2);
    return timeout < 100 ? Math.round(timeout * 1000) : Math.round(timeout);
  }
  return null;
};

const writeTextIfChanged = (targetPath, content) => {
  const previous = fs.existsSync(targetPath)
    ? fs.readFileSync(targetPath, 'utf8')
    : null;
  if (previous !== content) {
    fs.writeFileSync(targetPath, content);
  }
};

const main = async () => {
  console.log('Fetching Figma file...');
  const fileUrl = new URL(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`);
  fileUrl.searchParams.set('ids', FIGMA_CANVAS_ID);
  fileUrl.searchParams.set('depth', FIGMA_DEPTH);

  const fileJson = await fetchJson(fileUrl.toString());
  writeTextIfChanged(cachedFilePath, JSON.stringify(fileJson, null, 2));

  const canvas = (fileJson.document.children ?? []).find(
    (node) => node.id === FIGMA_CANVAS_ID,
  );
  if (!canvas) {
    throw new Error(`Unable to find canvas ${FIGMA_CANVAS_ID}`);
  }

  const screenCounts = new Map();
  const screens = (canvas.children ?? [])
    .filter((node) => node.type === 'FRAME')
    .map((frame) => {
      const base = slugify(frame.name);
      const count = (screenCounts.get(base) ?? 0) + 1;
      screenCounts.set(base, count);
      return {
        id: frame.id,
        key: count === 1 ? base : `${base}-${count}`,
        name: frame.name,
        width: Math.round(frame.absoluteBoundingBox?.width ?? 402),
        height: Math.round(frame.absoluteBoundingBox?.height ?? 874),
        originX: frame.absoluteBoundingBox?.x ?? 0,
        originY: frame.absoluteBoundingBox?.y ?? 0,
        node: frame,
      };
    });

  const screenById = new Map(screens.map((screen) => [screen.id, screen]));

  console.log(`Exporting ${screens.length} screen images...`);
  const imageUrls = {};
  for (const batch of chunk(screens, 8)) {
    const imageUrl = new URL(`https://api.figma.com/v1/images/${FIGMA_FILE_KEY}`);
    imageUrl.searchParams.set(
      'ids',
      batch.map((screen) => screen.id).join(','),
    );
    imageUrl.searchParams.set('format', 'png');
    imageUrl.searchParams.set('scale', '2');
    const imageJson = await fetchJson(imageUrl.toString());
    Object.assign(imageUrls, imageJson.images ?? {});
    await sleep(700);
  }

  for (const screen of screens) {
    const imageUrl = imageUrls[screen.id];
    if (!imageUrl) {
      throw new Error(`Missing image export URL for ${screen.name} (${screen.id})`);
    }
    const imageResponse = await fetchWithRetry(imageUrl);
    if (!imageResponse.ok) {
      throw new Error(
        `Failed to download ${screen.key}: ${imageResponse.status} ${await imageResponse.text()}`,
      );
    }
    const buffer = Buffer.from(await imageResponse.arrayBuffer());
    fs.writeFileSync(path.join(outputDir, `${screen.key}.png`), buffer);
  }

  const metadata = screens.map((screen) => {
    const hotspots = [];
    const autoTransitions = [];
    const seenHotspots = new Set();
    const seenAutoTransitions = new Set();

    const visit = (node) => {
      const nodeBox = node.absoluteBoundingBox;
      for (const interaction of getInteractions(node)) {
        const destinationId = getDestinationId(interaction);
        if (!destinationId || !screenById.has(destinationId)) {
          continue;
        }
        const destination = screenById.get(destinationId);
        const timeoutMs = getTimeoutMs(interaction);
        if (timeoutMs !== null) {
          const autoKey = `${destination.key}:${timeoutMs}`;
          if (!seenAutoTransitions.has(autoKey)) {
            seenAutoTransitions.add(autoKey);
            autoTransitions.push({ target: destination.key, timeoutMs });
          }
          continue;
        }
        if (!nodeBox) {
          continue;
        }
        const x = Math.max(0, nodeBox.x - screen.originX);
        const y = Math.max(0, nodeBox.y - screen.originY);
        const width = Math.min(screen.width - x, nodeBox.width);
        const height = Math.min(screen.height - y, nodeBox.height);
        if (width <= 0 || height <= 0) {
          continue;
        }
        const hotspotKey = `${node.id}:${destination.key}:${x}:${y}:${width}:${height}`;
        if (seenHotspots.has(hotspotKey)) {
          continue;
        }
        seenHotspots.add(hotspotKey);
        hotspots.push({
          id: node.id,
          target: destination.key,
          x: Number(x.toFixed(2)),
          y: Number(y.toFixed(2)),
          width: Number(width.toFixed(2)),
          height: Number(height.toFixed(2)),
        });
      }

      for (const child of node.children ?? []) {
        visit(child);
      }
    };

    visit(screen.node);

    return {
      key: screen.key,
      figmaId: screen.id,
      name: screen.name,
      width: screen.width,
      height: screen.height,
      hotspots,
      autoTransitions,
    };
  });

  const screenBlocks = metadata
    .map((screen) => {
      const hotspotLines = screen.hotspots
        .map(
          (hotspot) =>
            `      { id: '${hotspot.id}', target: '${hotspot.target}', x: ${hotspot.x}, y: ${hotspot.y}, width: ${hotspot.width}, height: ${hotspot.height} },`,
        )
        .join('\n');
      const autoLines = screen.autoTransitions
        .map(
          (transition) =>
            `      { target: '${transition.target}', timeoutMs: ${transition.timeoutMs} },`,
        )
        .join('\n');
      return `  {
    key: '${screen.key}',
    figmaId: '${screen.figmaId}',
    name: ${JSON.stringify(screen.name)},
    width: ${screen.width},
    height: ${screen.height},
    image: require('../../assets/figma/${screen.key}.png'),
    autoTransitions: [
${autoLines || '    '}
    ],
    hotspots: [
${hotspotLines || '    '}
    ],
  },`;
    })
    .join('\n');

  const topLeftScreen = [...screens].sort((a, b) => a.originY - b.originY || a.originX - b.originX)[0];
  const initialKey =
    metadata.find((screen) => screen.key === 'splash')?.key ??
    topLeftScreen?.key ??
    metadata[0]?.key ??
    'splash';

  const generatedModule = `export type FigmaHotspot = {
  id: string;
  target: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

export type FigmaAutoTransition = {
  target: string;
  timeoutMs: number;
};

export type FigmaScreen = {
  key: string;
  figmaId: string;
  name: string;
  width: number;
  height: number;
  image: number;
  autoTransitions: FigmaAutoTransition[];
  hotspots: FigmaHotspot[];
};

export const figmaScreens: FigmaScreen[] = [
${screenBlocks}
];

export const figmaScreenMap = Object.fromEntries(
  figmaScreens.map((screen) => [screen.key, screen]),
) as Record<string, FigmaScreen>;

export const initialScreenKey = '${initialKey}';
`;

  writeTextIfChanged(
    path.join(generatedDir, 'figmaScreens.ts'),
    generatedModule,
  );

  console.log(`Generated ${metadata.length} screens.`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
