import React from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import Sidebar from "App/Containers/Sidebar/Sidebar";
import WalletHome from "App/Containers/WalletHome/WalletHome"
import CreateWallet from 'App/Containers/CreateWallet/CreateWallet';
import Screenlock from 'App/Containers/Screenlock/Screenlock';
import { PaymentCompleted } from 'App/Components';

const WIDTH = Dimensions.get('window').width;

const LeftDrawer = createDrawerNavigator(
  {
    WalletHome: { screen: WalletHome },
    CreateWallet: { screen: CreateWallet },
    PaymentCompleted: { screen: PaymentCompleted },
    Screenlock: { screen: Screenlock }
  },
  {
    initialRouteName: "WalletHome",
    drawerWidth:WIDTH*0.80,
    drawerPosition:'left',
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <Sidebar {...props} />,
    drawerOpenRoute: 'LeftSideMenu',
    drawerCloseRoute: 'LeftSideMenuClose',
    drawerToggleRoute: 'LeftSideMenuToggle',
  }
);

export default LeftDrawer;