import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Images } from 'App/Theme'

import Style from './BottomMenuStyle';

/**
 * This is an Dashboard Bottom Menu component.
 *
 */

const BottomMenu = ({ setScreen, setSelectedPaymentType, navigation }) => {
  return (
    <View style={Style.dashboardMenu}>
      <Icon 
        style={Style.dashboardMenuIcon} 
        name="call-received" 
        size={30} 
        color="#51B04D" 
        onPress={() => {
          setSelectedPaymentType('Receive');
          setScreen('SelectWallet');
        }} 
      />
      <TouchableOpacity style={Style.logo} onPress={() => setScreen('Dashboard')}>
        <Image 
          style={Style.logoImage} 
          source={Images.menuLogo} 
          resizeMode={'contain'} 
        />
      </TouchableOpacity>
      
      <Icon 
        style={Style.dashboardMenuIcon} 
        name="send" 
        size={30} 
        color="#51B04D" 
        onPress={() => { 
          setSelectedPaymentType('Send') 
          setScreen('SelectWallet');
        }} 
      />
    </View>
  );
}

BottomMenu.propTypes = {
}

export default BottomMenu;