import React from 'react'
import { View, ActivityIndicator, Text, Image } from 'react-native'
import { Buttons } from 'App/Theme'
import { Images } from 'App/Theme'
import Style from './WalletNewStyle';

// import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * This is an Wallet New component.
 *
 */

const WalletNew = (props) => {
  return (
    <View style={Style.container}>
      <View style={Style.logoContainer}>
        <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
      </View>
      
      <View  style={Style.buttonContainer}>
        <Buttons 
          text="Create a new wallet"  
          onPress={() => props.navigation.navigate('CreateWallet', {
            componentToBeRendered: "Info"
          })}
        />
        <Buttons text="Restore a Wallet" />
      </View>
    </View>
  );
}

WalletNew.propTypes = {
}

export default WalletNew;