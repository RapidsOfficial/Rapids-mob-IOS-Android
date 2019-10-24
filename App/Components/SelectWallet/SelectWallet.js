import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { Cards } from 'App/Theme';
import { Buttons } from 'App/Theme';

import Style from './SelectWalletStyle';

/**
 * This is an Wallet Receive Component.
 *
 */

const SelectWallet = ({ wallets, selectWallet, setScreen, selectedPaymentType }) => {
  const [ wallet, setWallet ] = useState({});

  return (
    <View style={Style.selectWalletScreen}>
      {wallets.map(walletItem => (
        <Cards 
          key={walletItem.walletName}
          content={
            <View style={Style.cardContent}>
              <Text>{walletItem.walletName}</Text>
              <Text>{'0M'}</Text>
              <Text>{walletItem.addresses[0].address}</Text>
            </View>
          }
          onPress={() => setWallet(walletItem)} 
        />
      ))}
      

      <View style={Style.createButton}>
        <Buttons 
          text="Select Wallet" 
          onPress={() => {
            selectWallet(wallet);
            setScreen(selectedPaymentType);
          }} 
        />
      </View>
    </View>
  );
}

SelectWallet.propTypes = {
}

export default SelectWallet;