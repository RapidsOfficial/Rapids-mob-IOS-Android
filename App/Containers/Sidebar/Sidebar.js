import React, { Component } from "react"
// import { Content,List, Header, Body, Title,ListItem, Container, Left, Right, Icon, Text, Badge} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationActions } from 'react-navigation';
import {Text, View} from 'react-native';
import Styles from './SidebarStyle.js';

export default class LeftSideBar extends React.Component {
  constructor(props) {
    super(props)
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
          {/* <Text style={Styles.sectionHeadingStyle}>
            Section 1
          </Text> */}
          <View style={Styles.navSectionStyle}>
            <Text style={Styles.navItemStyle} 
              onPress={this.navigateToScreen('WalletHome')}
            >
              Home
            </Text>
          </View>
        </View>
        <View>
          {/* <Text style={Styles.sectionHeadingStyle}>
            Section 2
          </Text> */}
          <View style={Styles.navSectionStyle}>
            <Text 
              style={Styles.navItemStyle} 
              onPress={this.navigateToScreen('CreateWallet',{
                  componentToBeRendered: "Info"
                })
              }
            >
              Add Wallet
            </Text>
            <Text style={Styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
              Logout
            </Text>
          </View>            
        </View>
      </ScrollView>
    )
  }
}