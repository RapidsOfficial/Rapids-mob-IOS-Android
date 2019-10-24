import React from 'react'
import { View, Text } from 'react-native'
import Style from './WalletLoginStyle';

// import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * This is an Wallet Login component.
 *
 */

const WalletLogin = () => {
  return (
    <View style={Style.container}>
      <Text>Hello Wallet Login Screenn</Text>
    </View>
  );  
}

WalletLogin.propTypes = {
}

export default WalletLogin;