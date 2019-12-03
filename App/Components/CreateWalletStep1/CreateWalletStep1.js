import React, { useState } from 'react';
import { View } from 'react-native';


import Style from './CreateWalletStep1Style';
import { Buttons, Input } from 'App/Theme';

// import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * This is an Wallet Info component.
 *
 */

const CreateWalletStep1 = (props) => {
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
          label="Wallet Name" 
          onChangeText={setWalletName}
          baseColor={'white'}
          tintColor={'white'}
        />
      </View>
      <View style={Style.createButton}>
        <Buttons text="Create Wallet" onPress={createWallet} />
      </View>
    </View>
  )
}

CreateWalletStep1.propTypes = {
}

export default CreateWalletStep1;