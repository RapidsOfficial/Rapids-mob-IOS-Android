import React, { Component } from "react"
import { ScrollView } from "react-native-gesture-handler";
import { NavigationActions } from 'react-navigation';
import {Text, View, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Styles from './SidebarStyle.js';

export default class LeftSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarScreen: 'Main'
    };
  }

  navigateToScreen = (route, params) => () => {
    console.log(route, '=-=-=-=-');
    
    const navigate = NavigationActions.navigate({
      routeName: route,
      params: params
    });
    this.props.navigation.dispatch(navigate);
    this.props.navigation.closeDrawer();
    this.setState({ sidebarScreen: 'Main' })
  }

  renderSideBarView = () => {
    const { sidebarScreen } = this.state;
    switch(sidebarScreen) {
      case 'Main':
        return (
          <View>
            <TouchableHighlight underlayColor="#2C693E" onPress={this.navigateToScreen('WalletHome')}>
              <View style={Styles.navSectionStyle} >
                <Icon style={Styles.navItemIcon} name="account-balance-wallet" size={30} color="#72F586" />
                <Text style={Styles.navItemStyle}>
                  Wallets
                </Text>
              </View>
             
            </TouchableHighlight>
    
            <TouchableHighlight underlayColor="#2C693E" onPress={this.navigateToScreen('CreateWallet',{
                componentToBeRendered: "Info"
              })
            }>
              <View style={Styles.navSectionStyle} >
                <Icon style={Styles.navItemIcon} name="account-balance-wallet" size={30} color="#72F586" />
                <Text style={Styles.navItemStyle} >
                  Add Wallet
                </Text>
              </View>
            </TouchableHighlight>
    
            <TouchableHighlight 
              underlayColor="#2C693E" 
              
              onPress={() => this.setState({sidebarScreen: 'Settings'})}
            >
              <View style={Styles.navSectionStyle} >
                <Icon style={Styles.navItemIcon} name="settings-applications" size={30} color="#72F586" />
                <Text style={Styles.navItemStyle} >
                  Settings
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        );
      case 'Settings':
        return (
          <View>
            <TouchableHighlight 
              underlayColor="#2C693E" 
              onPress={() => this.setState({sidebarScreen: 'Main'})}
            >
              <View style={Styles.navInnerSectionStyle} >
                <Icon style={Styles.navItemIcon} name="settings-applications" size={30} color="#72F586" />
                <Text style={Styles.navItemStyle} >
                  Settings
                </Text>
              </View>
            </TouchableHighlight>
            <View style={Styles.navInnerItemContainer}>
              <View style={Styles.navInnerItemContent}>
                <Text style={Styles.navInnerItemTitle}>Manage Password</Text>
                <TouchableHighlight 
                  underlayColor="#2C693E" 
                  onPress={() => this.setState({sidebarScreen: 'Settings'})}
                >
                  <Text style={Styles.navInnerItemStyle} >
                    Show Password
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight 
                  underlayColor="#2C693E" 
                  onPress={() => this.setState({sidebarScreen: 'Settings'})}
                >
                  <Text style={Styles.navInnerItemStyle} >
                    Reset Password
                  </Text>
                </TouchableHighlight>
              </View>

              <View style={Styles.navInnerItemContent}>
                <Text style={Styles.navInnerItemTitle}>Backup & Security</Text>
                <TouchableHighlight 
                  underlayColor="#2C693E" 
                  onPress={() => this.setState({sidebarScreen: 'Settings'})}
                >
                  <Text style={Styles.navInnerItemStyle} >
                  Backup Wallet Files
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight 
                  underlayColor="#2C693E" 
                  onPress={() => this.setState({sidebarScreen: 'Settings'})}
                >
                  <Text style={Styles.navInnerItemStyle} >
                    Show Public Address Keys
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight 
                  underlayColor="#2C693E" 
                  onPress={() => this.setState({sidebarScreen: 'Settings'})}
                >
                  <Text style={Styles.navInnerItemStyle} >
                    Backup Mnemonic Recovery
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight 
                  underlayColor="#2C693E" 
                  onPress={() => this.setState({sidebarScreen: 'Settings'})}
                >
                  <Text style={Styles.navInnerItemStyle} >
                    Reset Mnemonic Recovery
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight 
                  underlayColor="#2C693E" 
                  onPress={this.navigateToScreen('Screenlock')}
                >
                  <Text style={Styles.navInnerItemStyle} >
                    Manage Touch ID & Secure PIN
                  </Text>
                </TouchableHighlight>
              </View>

              <View style={Styles.navInnerItemContent}>
                <TouchableHighlight 
                  underlayColor="#2C693E" 
                  onPress={this.navigateToScreen('Settings')}
                >
                  <Text style={Styles.navInnerItemStyle} >
                    Info
                  </Text>
                </TouchableHighlight>
              </View>
              
            </View>
          </View>
        );
      default:
        return (
          <View>
            <TouchableHighlight underlayColor="#2C693E" onPress={this.navigateToScreen('WalletHome')}>
              <Text style={Styles.navItemStyle}>
                Wallets
              </Text>
            </TouchableHighlight>
    
            <TouchableHighlight underlayColor="#2C693E" onPress={this.navigateToScreen('CreateWallet',{
                componentToBeRendered: "Info"
              })
            }>
              <Text style={Styles.navItemStyle} >
                Add Wallet
              </Text>
            </TouchableHighlight>
    
            <TouchableHighlight 
              underlayColor="#2C693E" 
              style={Styles.navSectionStyle} 
              onPress={() => this.setState({sidebarScreen: 'Settings'})}
            >
              <Text style={Styles.navItemStyle} >
                Settings
              </Text>
            </TouchableHighlight>
          </View>
        );  
    }
    
  }

  render() {
    return (
      <ScrollView style={Styles.container}>
        {this.renderSideBarView()}
      </ScrollView>
    )
  }
}