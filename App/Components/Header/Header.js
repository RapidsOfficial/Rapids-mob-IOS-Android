import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Images } from 'App/Theme'

import Style from './HeaderStyle';

/**
 * This is an Dashboard Navigator component.
 *
 */

const Header = ({ navigation, screen, setScreen, lastScreen }) => { 
  
  // const handleNavigation = () => {
    
  // }

  if(screen === 'Dashboard')
    return (
      <View style={Style.walletNavigator}>
        <Icon style={Style.walletNavIcon} name="menu" size={30} color="#72F586" onPress={() => navigation.openDrawer()} />
        <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
        <Icon style={Style.walletNavIcon} name="lock" size={30} color="#72F586" />
      </View>
    );
  else
    return (
      <View style={Style.walletNavigator}>
        <Icon style={Style.walletNavIcon} name="arrow-back" size={30} color="#72F586" onPress={() => setScreen(lastScreen, 'Dashboard')} />
        <Text style={Style.logoText}>{screen.split(/(?=[A-Z])/).join(" ")}</Text>
        <Image style={Style.walletNavImage} source={Images.newRapidLogoSmall} resizeMode={'contain'} />
      </View>
    );
}

Header.propTypes = {
}

export default Header;