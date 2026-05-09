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
    figmaId: '19:4565',
    name: "Profilelg",
    width: 402,
    height: 874,
    image: require('../../assets/figma/profilelg.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:4586', target: 'profilelg-8', x: 322, y: 334, width: 56, height: 15 },
      { id: '19:4769', target: 'home2', x: 52, y: 819.7, width: 28, height: 34.61 },
    ],
  },
  {
    key: 'profilelg-8',
    figmaId: '19:4790',
    name: "Profilelg 8",
    width: 402,
    height: 874,
    image: require('../../assets/figma/profilelg-8.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:4843', target: 'smartbike', x: 24, y: 381, width: 49, height: 54 },
      { id: '19:4855', target: 'home-page', x: 225, y: 381, width: 44, height: 54 },
      { id: '19:5106', target: 'home2', x: 52, y: 820.7, width: 28, height: 34.61 },
      { id: '19:5127', target: 'profilelg', x: 328, y: 337, width: 49, height: 15 },
    ],
  },
  {
    key: 'smartbike',
    figmaId: '19:5128',
    name: "SMartBike",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:5321', target: 'smartbike2', x: 20, y: 483, width: 165, height: 241 },
      { id: '19:5410', target: 'smartbike4', x: 348, y: 66, width: 38, height: 44 },
    ],
  },
  {
    key: 'smartbike2',
    figmaId: '19:5421',
    name: "SMartBike2",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike2.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:5517', target: 'smartbike3', x: 60, y: 801, width: 129, height: 43 },
      { id: '19:5544', target: 'smartbike', x: 21, y: 76, width: 44, height: 44 },
    ],
  },
  {
    key: 'smartbike8',
    figmaId: '19:5549',
    name: "SMartBike8",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike8.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:5668', target: 'smartbike9', x: 97, y: 770, width: 208, height: 50 },
      { id: '19:5671', target: 'smartbike7', x: 20, y: 60, width: 233, height: 44 },
      { id: '19:5675', target: 'smartbike', x: 348, y: 60, width: 44, height: 44 },
    ],
  },
  {
    key: 'smartbike9',
    figmaId: '19:5678',
    name: "SMartBike9",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike9.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:5709', target: 'smartbike8', x: 20, y: 60, width: 230, height: 44 },
      { id: '19:5713', target: 'smartbike10', x: 97, y: 770, width: 208, height: 50 },
    ],
  },
  {
    key: 'verify-pin',
    figmaId: '19:5716',
    name: "Verify PIN",
    width: 402,
    height: 874,
    image: require('../../assets/figma/verify-pin.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:5747', target: 'paymentsuccess', x: 23, y: 741, width: 348, height: 68 },
      { id: '19:5751', target: 'payment-screen', x: 22, y: 57, width: 40, height: 40 },
    ],
  },
  {
    key: 'smartbike10',
    figmaId: '19:5757',
    name: "SMartBike10",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike10.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:5802', target: 'smartbike7', x: 152, y: 67, width: 98, height: 30 },
      { id: '19:5807', target: 'smartbike', x: 89, y: 691, width: 251.37, height: 50 },
    ],
  },
  {
    key: 'paymentsuccess',
    figmaId: '19:5810',
    name: "PaymentSuccess",
    width: 402,
    height: 874,
    image: require('../../assets/figma/paymentsuccess.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:5860', target: 'home-page', x: 89, y: 691, width: 251.37, height: 50 },
    ],
  },
  {
    key: 'smartbike3',
    figmaId: '19:5863',
    name: "SMartBike3",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike3.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:5877', target: 'smartbike4', x: 201, y: 800, width: 160, height: 44 },
      { id: '19:5893', target: 'smartbike2', x: 20, y: 60, width: 44, height: 44 },
    ],
  },
  {
    key: 'smartbike4',
    figmaId: '19:5912',
    name: "SMartBike4",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike4.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:5914', target: 'smartbike5', x: 20, y: 503, width: 350, height: 44 },
      { id: '19:5992', target: 'smartbike3', x: 20, y: 60, width: 44, height: 44 },
      { id: '19:5995', target: 'smartbike', x: 348, y: 60, width: 44, height: 44 },
    ],
  },
  {
    key: 'smartbike6',
    figmaId: '19:6024',
    name: "SMartBike6",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike6.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:6047', target: 'smartbike7', x: 108, y: 770, width: 44, height: 44 },
      { id: '19:6116', target: 'smartbike3', x: 20, y: 60, width: 275, height: 44 },
      { id: '19:6147', target: 'smartbike', x: 348, y: 60, width: 44, height: 44 },
    ],
  },
  {
    key: 'smartbike7',
    figmaId: '19:6150',
    name: "SMartBike7",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike7.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:6235', target: 'smartbike3', x: 20, y: 60, width: 280, height: 44 },
      { id: '19:6269', target: 'smartbike8', x: 238, y: 770, width: 44, height: 44 },
      { id: '19:6274', target: 'smartbike', x: 348, y: 60, width: 44, height: 44 },
    ],
  },
  {
    key: 'smartbike5',
    figmaId: '19:6277',
    name: "SMartBike5",
    width: 402,
    height: 874,
    image: require('../../assets/figma/smartbike5.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:6282', target: 'smartbike6', x: 256, y: 503, width: 114, height: 44 },
      { id: '19:6304', target: 'smartbike3', x: 20, y: 60, width: 275, height: 44 },
      { id: '19:6491', target: 'smartbike', x: 348, y: 60, width: 44, height: 44 },
    ],
  },
  {
    key: 'payment-screen',
    figmaId: '19:6532',
    name: "Payment Screen",
    width: 402,
    height: 874,
    image: require('../../assets/figma/payment-screen.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:6574', target: 'home-page', x: 295, y: 57, width: 40, height: 40 },
      { id: '19:6582', target: 'guest-details', x: 22, y: 57, width: 40, height: 40 },
      { id: '19:6606', target: 'verify-pin', x: 23, y: 741, width: 348, height: 68 },
    ],
  },
  {
    key: 'guest-details',
    figmaId: '19:6609',
    name: "Guest Details",
    width: 402,
    height: 874,
    image: require('../../assets/figma/guest-details.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:6662', target: 'payment-screen', x: 23, y: 749, width: 348, height: 68 },
      { id: '19:6673', target: 'boarding-and-drop-details', x: 22, y: 57, width: 40, height: 40 },
      { id: '19:6681', target: 'home-page', x: 304, y: 66, width: 22, height: 19.78 },
    ],
  },
  {
    key: 'boarding-and-drop-details',
    figmaId: '19:6717',
    name: "Boarding and Drop Details",
    width: 402,
    height: 874,
    image: require('../../assets/figma/boarding-and-drop-details.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:6719', target: 'home-page', x: 295, y: 57, width: 40, height: 40 },
      { id: '19:6727', target: 'seat-selection', x: 22, y: 57, width: 40, height: 40 },
      { id: '19:6840', target: 'guest-details', x: 26, y: 778, width: 344, height: 46 },
    ],
  },
  {
    key: 'seat-selection',
    figmaId: '19:6847',
    name: "Seat Selection",
    width: 402,
    height: 874,
    image: require('../../assets/figma/seat-selection.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:6906', target: 'home-page', x: 295, y: 57, width: 40, height: 40 },
      { id: '19:6914', target: 'booking-page', x: 22, y: 57, width: 40, height: 40 },
      { id: '19:6958', target: 'boarding-and-drop-details', x: 34, y: 786, width: 344, height: 46 },
    ],
  },
  {
    key: 'booking-page',
    figmaId: '19:6961',
    name: "Booking Page",
    width: 402,
    height: 874,
    image: require('../../assets/figma/booking-page.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:6962', target: 'seat-selection', x: 23, y: 355, width: 348, height: 104 },
      { id: '19:7042', target: 'home-page', x: 295, y: 57, width: 40, height: 40 },
      { id: '19:7076', target: 'home-page', x: 22, y: 57, width: 40, height: 40 },
    ],
  },
  {
    key: 'home-page',
    figmaId: '19:7086',
    name: "Home Page",
    width: 402,
    height: 874,
    image: require('../../assets/figma/home-page.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:7091', target: 'booking-page', x: 343, y: 56, width: 40, height: 40 },
      { id: '19:7145', target: 'booking-page', x: 26, y: 695, width: 342, height: 102 },
      { id: '19:7186', target: 'profilelg-8', x: 17, y: 56, width: 40, height: 40 },
    ],
  },
  {
    key: 'splash',
    figmaId: '19:12605',
    name: "Splash",
    width: 402,
    height: 874,
    image: require('../../assets/figma/splash.png'),
    autoTransitions: [
      { target: 'home', timeoutMs: 800 },
    ],
    hotspots: [
    
    ],
  },
  {
    key: 'home',
    figmaId: '19:12622',
    name: "Home",
    width: 402,
    height: 874,
    image: require('../../assets/figma/home.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:12656', target: 'profile', x: 319, y: 819.7, width: 30, height: 34.61 },
    ],
  },
  {
    key: 'home2',
    figmaId: '19:12769',
    name: "Home2",
    width: 402,
    height: 874,
    image: require('../../assets/figma/home2.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:12803', target: 'profilelg', x: 319, y: 819.7, width: 30, height: 34.61 },
    ],
  },
  {
    key: 'profile',
    figmaId: '19:12917',
    name: "Profile",
    width: 402,
    height: 874,
    image: require('../../assets/figma/profile.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:12938', target: 'profile-1', x: 322, y: 334, width: 56, height: 15 },
      { id: '19:12939', target: 'createaccount', x: 24, y: 111, width: 57, height: 57 },
      { id: '19:13116', target: 'home', x: 52, y: 819.7, width: 28, height: 34.61 },
    ],
  },
  {
    key: 'profile-1',
    figmaId: '19:13362',
    name: "Profile 1",
    width: 402,
    height: 874,
    image: require('../../assets/figma/profile-1.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:13383', target: 'profile', x: 322, y: 334, width: 49, height: 15 },
      { id: '19:13384', target: 'createaccount', x: 24, y: 111, width: 57, height: 57 },
      { id: '19:13674', target: 'home', x: 52, y: 820.7, width: 28, height: 34.61 },
    ],
  },
  {
    key: 'createaccount',
    figmaId: '19:15173',
    name: "CreateAccount",
    width: 402,
    height: 874,
    image: require('../../assets/figma/createaccount.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:15193', target: 'loginform', x: 99, y: 743, width: 220, height: 26 },
      { id: '19:15195', target: 'authpasswordcreate', x: 16, y: 653, width: 370, height: 61 },
      { id: '19:15197', target: 'profile', x: 16, y: 70, width: 47, height: 47 },
    ],
  },
  {
    key: 'loginform',
    figmaId: '19:15205',
    name: "LoginForm",
    width: 402,
    height: 874,
    image: require('../../assets/figma/loginform.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:15224', target: 'failloginform', x: 17, y: 703, width: 370, height: 61 },
      { id: '19:15225', target: 'authpasswordlogin', x: 17, y: 703, width: 370, height: 61 },
      { id: '19:15227', target: 'createaccount', x: 17, y: 70, width: 47, height: 47 },
      { id: '19:15229', target: 'forgotpass', x: 86, y: 789, width: 222, height: 31 },
    ],
  },
  {
    key: 'forgotpass',
    figmaId: '19:15231',
    name: "ForgotPass",
    width: 402,
    height: 874,
    image: require('../../assets/figma/forgotpass.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:15248', target: 'passrecovey', x: 18, y: 668, width: 370, height: 61 },
      { id: '19:15251', target: 'loginform', x: 17, y: 70, width: 47, height: 47 },
    ],
  },
  {
    key: 'newpass',
    figmaId: '19:15263',
    name: "NewPass",
    width: 402,
    height: 874,
    image: require('../../assets/figma/newpass.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:15280', target: 'loginform', x: 18, y: 668, width: 370, height: 61 },
      { id: '19:15283', target: 'passrecovey', x: 17, y: 70, width: 47, height: 47 },
    ],
  },
  {
    key: 'passrecovey',
    figmaId: '19:15293',
    name: "PassRecovey",
    width: 402,
    height: 874,
    image: require('../../assets/figma/passrecovey.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:15310', target: 'newpass', x: 18, y: 668, width: 370, height: 61 },
      { id: '19:15313', target: 'forgotpass', x: 17, y: 70, width: 47, height: 47 },
      { id: '19:15317', target: 'passrecovey-2', x: 137, y: 464, width: 104, height: 17 },
    ],
  },
  {
    key: 'passrecovey-2',
    figmaId: '19:15328',
    name: "PassRecovey",
    width: 402,
    height: 874,
    image: require('../../assets/figma/passrecovey-2.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:15348', target: 'forgotpass', x: 17, y: 70, width: 47, height: 47 },
      { id: '19:15353', target: 'passrecovey-3', x: 137, y: 464, width: 104, height: 17 },
    ],
  },
  {
    key: 'passrecovey-3',
    figmaId: '19:15364',
    name: "PassRecovey",
    width: 402,
    height: 874,
    image: require('../../assets/figma/passrecovey-3.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:15405', target: 'passrecovey', x: 101, y: 498, width: 201, height: 50 },
    ],
  },
  {
    key: 'failloginform',
    figmaId: '19:15412',
    name: "FailLoginForm",
    width: 402,
    height: 874,
    image: require('../../assets/figma/failloginform.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:15434', target: 'createaccount', x: 17, y: 70, width: 47, height: 47 },
      { id: '19:15442', target: 'loginform', x: 102, y: 517, width: 201, height: 50 },
    ],
  },
  {
    key: 'authpasswordcreate',
    figmaId: '19:15454',
    name: "AuthPasswordCreate",
    width: 402,
    height: 874,
    image: require('../../assets/figma/authpasswordcreate.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:15471', target: 'createaccount', x: 16, y: 70, width: 47, height: 47 },
      { id: '19:15486', target: 'splash1', x: 16, y: 653, width: 370, height: 61 },
      { id: '19:15487', target: 'splash1', x: 16, y: 653, width: 370, height: 61 },
    ],
  },
  {
    key: 'authpasswordlogin',
    figmaId: '19:15489',
    name: "AuthPasswordLogin",
    width: 402,
    height: 874,
    image: require('../../assets/figma/authpasswordlogin.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:15506', target: 'loginform', x: 16, y: 70, width: 47, height: 47 },
      { id: '19:15521', target: 'authpasswordlogin-2', x: 16, y: 653, width: 370, height: 61 },
      { id: '19:15522', target: 'home2', x: 16, y: 653, width: 370, height: 61 },
    ],
  },
  {
    key: 'authpasswordlogin-2',
    figmaId: '19:15524',
    name: "AuthPasswordLogin",
    width: 402,
    height: 874,
    image: require('../../assets/figma/authpasswordlogin-2.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:15564', target: 'authpasswordlogin', x: 100, y: 493, width: 201, height: 50 },
    ],
  },
  {
    key: 'splash1',
    figmaId: '19:15576',
    name: "Splash1",
    width: 402,
    height: 874,
    image: require('../../assets/figma/splash1.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:15591', target: 'splash1-2', x: 0, y: 40, width: 402, height: 834 },
    ],
  },
  {
    key: 'splash1-2',
    figmaId: '19:15606',
    name: "Splash1",
    width: 402,
    height: 874,
    image: require('../../assets/figma/splash1-2.png'),
    autoTransitions: [
    
    ],
    hotspots: [
      { id: '19:15606', target: 'home2', x: 0, y: 0, width: 402, height: 874 },
    ],
  },
];

export const figmaScreenMap = Object.fromEntries(
  figmaScreens.map((screen) => [screen.key, screen]),
) as Record<string, FigmaScreen>;

export const initialScreenKey = 'splash';
