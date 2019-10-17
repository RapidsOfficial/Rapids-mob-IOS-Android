import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import Style from './WalletPassword';

// import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * This is an Wallet Password component.
 *
 */

const WalletPassword = () => {
  return (
    <View style={Style.container}>
      <Text>Hello Wallet Password</Text>
    </View>
  );
}

WalletPassword.propTypes = {
}

export default WalletPassword;