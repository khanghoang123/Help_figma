export type FigmaHotspot = {
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
  {
    key: 'profilelg',
    figmaId: '53:257',
    name: "Profilelg",
    width: 402,
    height: 874,
    image: require('../../assets/figma/profilelg.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:278', target: 'profilelg-8', x: 322, y: 334, width: 56, height: 15 },
      { id: '53:317', target: 'home-1', x: 124.5, y: 381, width: 46, height: 54 },
      { id: '53:461', target: 'home2', x: 52, y: 819.7, width: 28, height: 34.61 },
    ],
  },
  {
    key: 'profilelg-8',
    figmaId: '53:482',
    name: "Profilelg 8",
    width: 402,
    height: 874,
    image: require('../../assets/figma/profilelg-8.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:535', target: 'smartbike', x: 24, y: 381, width: 49, height: 54 },
      { id: '53:541', target: 'home-1', x: 123, y: 381, width: 46, height: 54 },
      { id: '53:547', target: 'home-page', x: 225, y: 381, width: 44, height: 54 },
      { id: '53:798', target: 'home2', x: 52, y: 820.7, width: 28, height: 34.61 },
      { id: '53:819', target: 'profilelg', x: 328, y: 337, width: 49, height: 15 },
    ],
  },
  {
    key: 'smartbike',
    figmaId: '53:820',
    name: "SMartBike",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:1013', target: 'smartbike2', x: 20, y: 483, width: 165, height: 241 },
      { id: '53:1102', target: 'smartbike4', x: 348, y: 66, width: 38, height: 44 },
    ],
  },
  {
    key: 'smartbike2',
    figmaId: '53:1113',
    name: "SMartBike2",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike2.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:1209', target: 'smartbike3', x: 60, y: 801, width: 129, height: 43 },
      { id: '53:1236', target: 'smartbike', x: 21, y: 76, width: 44, height: 44 },
    ],
  },
  {
    key: 'smartbike8',
    figmaId: '53:1241',
    name: "SMartBike8",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike8.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:1360', target: 'smartbike9', x: 97, y: 770, width: 208, height: 50 },
      { id: '53:1363', target: 'smartbike7', x: 20, y: 60, width: 233, height: 44 },
      { id: '53:1367', target: 'smartbike', x: 348, y: 60, width: 44, height: 44 },
    ],
  },
  {
    key: 'smartbike9',
    figmaId: '53:1370',
    name: "SMartBike9",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike9.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:1401', target: 'smartbike8', x: 20, y: 60, width: 230, height: 44 },
      { id: '53:1405', target: 'smartbike10', x: 97, y: 770, width: 208, height: 50 },
    ],
  },
  {
    key: 'verify-pin',
    figmaId: '53:1408',
    name: "Verify PIN",
    width: 402,
    height: 874,
    image: require('../../assets/figma/verify-pin.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:1439', target: 'paymentsuccess', x: 23, y: 741, width: 348, height: 68 },
      { id: '53:1443', target: 'payment-screen', x: 22, y: 57, width: 40, height: 40 },
    ],
  },
  {
    key: 'smartbike10',
    figmaId: '53:1449',
    name: "SMartBike10",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike10.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:1494', target: 'smartbike7', x: 152, y: 67, width: 98, height: 30 },
      { id: '53:1499', target: 'smartbike', x: 89, y: 691, width: 251.37, height: 50 },
    ],
  },
  {
    key: 'paymentsuccess',
    figmaId: '53:1502',
    name: "PaymentSuccess",
    width: 402,
    height: 874,
    image: require('../../assets/figma/paymentsuccess.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:1552', target: 'home-page', x: 89, y: 691, width: 251.37, height: 50 },
    ],
  },
  {
    key: 'smartbike3',
    figmaId: '53:1555',
    name: "SMartBike3",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike3.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:1569', target: 'smartbike4', x: 201, y: 800, width: 160, height: 44 },
      { id: '53:1585', target: 'smartbike2', x: 20, y: 60, width: 44, height: 44 },
    ],
  },
  {
    key: 'smartbike4',
    figmaId: '53:1604',
    name: "SMartBike4",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike4.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:1606', target: 'smartbike5', x: 20, y: 503, width: 350, height: 44 },
      { id: '53:1684', target: 'smartbike3', x: 20, y: 60, width: 44, height: 44 },
      { id: '53:1687', target: 'smartbike', x: 348, y: 60, width: 44, height: 44 },
    ],
  },
  {
    key: 'smartbike6',
    figmaId: '53:1716',
    name: "SMartBike6",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike6.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:1739', target: 'smartbike7', x: 108, y: 770, width: 44, height: 44 },
      { id: '53:1808', target: 'smartbike3', x: 20, y: 60, width: 275, height: 44 },
      { id: '53:1839', target: 'smartbike', x: 348, y: 60, width: 44, height: 44 },
    ],
  },
  {
    key: 'smartbike7',
    figmaId: '53:1842',
    name: "SMartBike7",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike7.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:1927', target: 'smartbike3', x: 20, y: 60, width: 280, height: 44 },
      { id: '53:1961', target: 'smartbike8', x: 238, y: 770, width: 44, height: 44 },
      { id: '53:1966', target: 'smartbike', x: 348, y: 60, width: 44, height: 44 },
    ],
  },
  {
    key: 'smartbike5',
    figmaId: '53:1969',
    name: "SMartBike5",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike5.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:1974', target: 'smartbike6', x: 256, y: 503, width: 114, height: 44 },
      { id: '53:1996', target: 'smartbike3', x: 20, y: 60, width: 275, height: 44 },
      { id: '53:2183', target: 'smartbike', x: 348, y: 60, width: 44, height: 44 },
    ],
  },
  {
    key: 'payment-screen',
    figmaId: '53:2186',
    name: "Payment Screen",
    width: 402,
    height: 874,
    image: require('../../assets/figma/payment-screen.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:2228', target: 'home-page', x: 295, y: 57, width: 40, height: 40 },
      { id: '53:2236', target: 'guest-details', x: 22, y: 57, width: 40, height: 40 },
      { id: '53:2260', target: 'verify-pin', x: 23, y: 741, width: 348, height: 68 },
    ],
  },
  {
    key: 'guest-details',
    figmaId: '53:2263',
    name: "Guest Details",
    width: 402,
    height: 874,
    image: require('../../assets/figma/guest-details.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:2316', target: 'payment-screen', x: 23, y: 749, width: 348, height: 68 },
      { id: '53:2327', target: 'boarding-and-drop-details', x: 22, y: 57, width: 40, height: 40 },
      { id: '53:2335', target: 'home-page', x: 304, y: 66, width: 22, height: 19.78 },
    ],
  },
  {
    key: 'boarding-and-drop-details',
    figmaId: '53:2371',
    name: "Boarding and Drop Details",
    width: 402,
    height: 874,
    image: require('../../assets/figma/boarding-and-drop-details.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:2373', target: 'home-page', x: 295, y: 57, width: 40, height: 40 },
      { id: '53:2381', target: 'seat-selection', x: 22, y: 57, width: 40, height: 40 },
      { id: '53:2494', target: 'guest-details', x: 26, y: 778, width: 344, height: 46 },
    ],
  },
  {
    key: 'seat-selection',
    figmaId: '53:2501',
    name: "Seat Selection",
    width: 402,
    height: 874,
    image: require('../../assets/figma/seat-selection.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:2560', target: 'home-page', x: 295, y: 57, width: 40, height: 40 },
      { id: '53:2568', target: 'booking-page', x: 22, y: 57, width: 40, height: 40 },
      { id: '53:2612', target: 'boarding-and-drop-details', x: 34, y: 786, width: 344, height: 46 },
    ],
  },
  {
    key: 'booking-page',
    figmaId: '53:2615',
    name: "Booking Page",
    width: 402,
    height: 874,
    image: require('../../assets/figma/booking-page.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:2616', target: 'seat-selection', x: 23, y: 355, width: 348, height: 104 },
      { id: '53:2696', target: 'home-page', x: 295, y: 57, width: 40, height: 40 },
      { id: '53:2730', target: 'home-page', x: 22, y: 57, width: 40, height: 40 },
    ],
  },
  {
    key: 'home-page',
    figmaId: '53:2740',
    name: "Home Page",
    width: 402,
    height: 874,
    image: require('../../assets/figma/home-page.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:2745', target: 'booking-page', x: 343, y: 56, width: 40, height: 40 },
      { id: '53:2799', target: 'booking-page', x: 26, y: 695, width: 342, height: 102 },
      { id: '53:2840', target: 'profilelg-8', x: 17, y: 56, width: 40, height: 40 },
    ],
  },
  {
    key: 'home2',
    figmaId: '53:2843',
    name: "Home2",
    width: 402,
    height: 874,
    image: require('../../assets/figma/home2.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:2877', target: 'profilelg', x: 319, y: 819.7, width: 30, height: 34.61 },
    ],
  },
  {
    key: 'home-1',
    figmaId: '53:2991',
    name: "home-1",
    width: 402,
    height: 874,
    image: require('../../assets/figma/home-1.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:3002', target: 'lambo', x: 128.88, y: 278, width: 88.62, height: 56 },
      { id: '53:3004', target: 'bugatti', x: 232.27, y: 278, width: 88.62, height: 56 },
      { id: '53:3006', target: 'audi', x: 335.65, y: 278, width: 66.35, height: 56 },
      { id: '53:3009', target: 'get-car', x: 26, y: 366, width: 350, height: 291 },
      { id: '53:3015', target: 'details', x: 34, y: 621, width: 110, height: 29 },
      { id: '53:3023', target: 'payment', x: 280, y: 621, width: 87, height: 29 },
      { id: '53:3367', target: 'profilelg-8', x: 18, y: 73, width: 40, height: 40 },
    ],
  },
  {
    key: 'lambo',
    figmaId: '53:3370',
    name: "lambo",
    width: 402,
    height: 874,
    image: require('../../assets/figma/lambo.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:3379', target: 'home-1', x: 0, y: 296, width: 88.62, height: 56 },
    ],
  },
  {
    key: 'bugatti',
    figmaId: '53:3748',
    name: "bugatti",
    width: 402,
    height: 874,
    image: require('../../assets/figma/bugatti.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:3757', target: 'home-1', x: 0, y: 292, width: 88.62, height: 56 },
    ],
  },
  {
    key: 'audi',
    figmaId: '53:4126',
    name: "audi",
    width: 402,
    height: 874,
    image: require('../../assets/figma/audi.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:4135', target: 'home-1', x: 0, y: 292, width: 88.62, height: 56 },
    ],
  },
  {
    key: 'details',
    figmaId: '53:4504',
    name: "details",
    width: 402,
    height: 874,
    image: require('../../assets/figma/details.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:4507', target: 'get-car', x: 13, y: 54, width: 44, height: 44 },
      { id: '53:4514', target: 'payment', x: 104.5, y: 395, width: 192, height: 56 },
    ],
  },
  {
    key: 'get-car',
    figmaId: '53:4595',
    name: "get-car",
    width: 402,
    height: 874,
    image: require('../../assets/figma/get-car.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:4880', target: 'details', x: 53, y: 800, width: 123.17, height: 40 },
      { id: '53:4883', target: 'payment', x: 220.83, y: 800, width: 127.17, height: 40 },
      { id: '53:4895', target: 'home-1', x: 8, y: 61, width: 44, height: 44 },
    ],
  },
  {
    key: 'payment',
    figmaId: '53:4901',
    name: "payment",
    width: 402,
    height: 874,
    image: require('../../assets/figma/payment.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:4903', target: 'details', x: 13, y: 54, width: 40, height: 32 },
      { id: '53:5023', target: 'verify-pin-2', x: 32, y: 661, width: 333, height: 64 },
    ],
  },
  {
    key: 'verify-pin-2',
    figmaId: '53:5126',
    name: "Verify PIN",
    width: 402,
    height: 874,
    image: require('../../assets/figma/verify-pin-2.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:5157', target: 'paymentsuccess-2', x: 23, y: 741, width: 348, height: 68 },
      { id: '53:5160', target: 'payment', x: 22, y: 57, width: 40, height: 40 },
    ],
  },
  {
    key: 'paymentsuccess-2',
    figmaId: '53:5167',
    name: "PaymentSuccess",
    width: 402,
    height: 874,
    image: require('../../assets/figma/paymentsuccess-2.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '53:5217', target: 'home-1', x: 89, y: 691, width: 251.37, height: 50 },
    ],
  },
];

export const figmaScreenMap = Object.fromEntries(
  figmaScreens.map((screen) => [screen.key, screen]),
) as Record<string, FigmaScreen>;

export const initialScreenKey = 'home-1';
