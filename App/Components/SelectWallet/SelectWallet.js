import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import { Cards } from 'App/Theme';
import { Buttons } from 'App/Theme';
import { Images } from 'App/Theme'

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
          style={wallet && wallet.walletId == walletItem.walletId? Style.selectedWallet: Style.cardSmall}
          content={
            <View style={Style.cardContent}>
              <View style={Style.cardCurrentInfoSmall}>
                <Text style={Style.cardCurrentInfoHeading}>{walletItem.walletName}</Text>
              </View>
              <View style={Style.cardRecentInfoSmall}>
                <View style={Style.cardCurrentInfoBalanceSmall}>
                  <Image style={Style.cardCurrentInfoBalanceImageSmall} source={Images.newRapidLogoSmall} resizeMode={'contain'}/>
                  <Text style={Style.cardCurrentInfoBalanceValueSmall}>{`0M`}</Text>
                </View>
                <View style={Style.cardCurrentInfoCurrencySmall}>
                  <Text style={Style.cardCurrentInfoCurrencyValueSmall}>$12.343</Text>
                  <Text style={Style.cardCurrentInfoCurrencyCodeSmall}>USD</Text>
                </View>
              </View>
            </View>
          }
          onPress={() => {
            if(!wallet ||  walletItem.walletId !== wallet.walletId)
              setWallet(walletItem);
            else
              setWallet();  
          }} 
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