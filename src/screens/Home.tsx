import React, { useEffect, useMemo, useState } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {
  figmaScreenMap,
  initialScreenKey,
  type FigmaHotspot,
} from '../generated/figmaScreens';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const getNextScreenKey = (target: string) =>
  figmaScreenMap[target] ? target : initialScreenKey;

export default function Home() {
  const [screenKey, setScreenKey] = useState(initialScreenKey);
  const screen = figmaScreenMap[screenKey] ?? figmaScreenMap[initialScreenKey];

  const scale = useMemo(
    () => Math.min(windowWidth / screen.width, windowHeight / screen.height),
    [screen.height, screen.width],
  );
  const renderedWidth = screen.width * scale;
  const renderedHeight = screen.height * scale;
  const offsetX = (windowWidth - renderedWidth) / 2;
  const offsetY = (windowHeight - renderedHeight) / 2;

  useEffect(() => {
    if (!screen.autoTransitions.length) {
      return undefined;
    }

    const transition = screen.autoTransitions[0];
    const timeout = setTimeout(() => {
      setScreenKey(getNextScreenKey(transition.target));
    }, transition.timeoutMs);

    return () => clearTimeout(timeout);
  }, [screen]);

  const navigate = (hotspot: FigmaHotspot) => {
    setScreenKey(getNextScreenKey(hotspot.target));
  };

  return (
    <SafeAreaView style={styles.root}>
      <View
        style={[
          styles.stage,
          {
            width: renderedWidth,
            height: renderedHeight,
            left: offsetX,
            top: offsetY,
          },
        ]}
      >
        <Image source={screen.image} style={styles.screenImage} resizeMode="stretch" />
        {screen.hotspots.map((hotspot) => (
          <Pressable
            key={`${screen.key}-${hotspot.id}-${hotspot.target}`}
            accessibilityRole="button"
            onPress={() => navigate(hotspot)}
            style={[
              styles.hotspot,
              {
                left: hotspot.x * scale,
                top: hotspot.y * scale,
                width: hotspot.width * scale,
                height: hotspot.height * scale,
              },
            ]}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000000',
  },
  stage: {
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
  },
  screenImage: {
    width: '100%',
    height: '100%',
  },
  hotspot: {
    position: 'absolute',
    backgroundColor: 'transparent',
  },
});
