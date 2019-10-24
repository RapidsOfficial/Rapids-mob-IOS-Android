import React, { useState } from 'react';
import { View } from 'react-native';


import Style from './WalletInfoStyle';
import { Buttons, Input } from 'App/Theme';

// import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * This is an Wallet Info component.
 *
 */

const WalletInfo = (props) => {
  const [ walletName, setWalletName ] = useState('');

  const createWallet = () => {

    const wallet = {
      walletName: walletName,
      wallets: props.wallets && props.wallets.length ? props.wallets : []
    };

    props.createWallet(wallet);
  };

  return (
    <View style={Style.container}>
      <View style={Style.content}>
        <Input 
          label="" 
          onChangeText={setWalletName}
        />
      </View>
      <View style={Style.createButton}>
        <Buttons text="Create Wallet" onPress={createWallet} />
      </View>
    </View>
  )
}

WalletInfo.propTypes = {
}

export default WalletInfo;