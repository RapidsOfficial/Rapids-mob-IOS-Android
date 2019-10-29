import React, { Component } from "react"
import { ScrollView } from "react-native-gesture-handler";
import { NavigationActions } from 'react-navigation';
import {Text, View, TouchableHighlight} from 'react-native';
import Styles from './SidebarStyle.js';

export default class LeftSideBar extends Component {
  constructor(props) {
    super(props);
  }

  navigateToScreen = (route, params) => () => {
    const navigate = NavigationActions.navigate({
      routeName: route,
      params: params
    });
    this.props.navigation.dispatch(navigate);
    this.props.navigation.closeDrawer();
  }

  render() {
    return (
      <ScrollView style={Styles.container}>
        <View>
          <TouchableHighlight underlayColor="#2C693E" style={Styles.navSectionStyle} onPress={this.navigateToScreen('WalletHome')}>
            <Text style={Styles.navItemStyle}>
              Home
            </Text>
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight underlayColor="#2C693E" style={Styles.navSectionStyle} onPress={this.navigateToScreen('CreateWallet',{
              componentToBeRendered: "Info"
            })
          }>
            <Text style={Styles.navItemStyle} >
              Add Wallet
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    )
  }
}