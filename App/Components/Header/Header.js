import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Images } from 'App/Theme'

import Style from './HeaderStyle';

/**
 * This is an Dashboard Navigator component.
 *
 */

const Header = ({navigation}) => {
  return (
    <View style={Style.walletNavigator}>
      <Icon style={Style.walletNavIcon} name="menu" size={30} color="#51B04D" onPress={() => navigation.openDrawer()} />
      <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
      <Icon style={Style.walletNavIcon} name="lock" size={30} color="#51B04D" />
    </View>
  );
}

Header.propTypes = {
}

export default Header;