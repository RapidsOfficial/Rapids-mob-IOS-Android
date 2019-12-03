import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Cards } from 'App/Theme';
import { Buttons } from 'App/Theme';
import { Images } from 'App/Theme'

import Style from './SelectWalletStyle';

/**
 * This is an Wallet Receive Component.
 *
 */

const SelectWallet = ({ wallets, selectWallet, setScreen, selectedPaymentType }) => {
  return (
    <View style={Style.selectWalletScreen}>
      <Text style={Style.selectWalletScreenTitle}>TO ADDRESS</Text>
      {wallets.map(walletItem => (
        <Cards 
          key={walletItem.id}
          style={Style.cardSmall}
          content={
            <View style={Style.cardContent}>
              <Image 
                style={Style.cardImage} 
                source={Images.walletIcon} 
                resizeMode={'contain'} 
              />
              <View style={Style.cardCurrentInfoSmall}>
                <Text style={Style.cardCurrentInfoHeading}>{walletItem.walletId.split('-').pop()}</Text>
                <Text style={Style.cardCurrentInfoBalanceValueSmall}>{walletItem.balance && walletItem.balance.balance ? walletItem.balance.balance: 0}</Text>
                <Text style={Style.cardCurrentInfoCurrencyValueSmall}>{walletItem.addresses && walletItem.addresses.length ? walletItem.addresses[0].address: '' }</Text>
              </View>
              <View style={Style.cardRecentInfoSmall}>
                <Icon style={Style.cardCurrentInfoBalanceImageSmall} name="keyboard-arrow-right" size={30} color="#72F586"/>
              </View>
            </View>
          }
          cardAction={() => {
            selectWallet(walletItem);
            setScreen(selectedPaymentType, 'Dashboard');  
          }} 
        />
      ))}
    </View>
  );
}

SelectWallet.propTypes = {
}

export default SelectWallet;