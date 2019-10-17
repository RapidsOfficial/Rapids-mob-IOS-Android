import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import Style from './WalletLoginStyle';

// import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * This is an Wallet Login component.
 *
 */

const WalletLogin = () => {
  console.log('=-=-=-=-=-=-=-Login')
  return (
    <View style={Style.container}>
      <Text>Hello Wallet Login</Text>
    </View>
  );  
}

WalletLogin.propTypes = {
}

export default WalletLogin;