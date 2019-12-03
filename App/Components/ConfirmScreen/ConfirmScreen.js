import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Cards } from 'App/Theme';
import { Buttons, Input, Images } from 'App/Theme';

import Style from './ConfirmScreenStyle';

/**
 * This is an Wallet ConfirmScreen Component.
 *
 */

const ConfirmScreen = ({ navigation, selectedWallet, setScreen,  transactionInfo, createTransaction, resetTransaction, transactionErrorMessage }) => {
  
  const walletName = selectedWallet.walletId.split('-').pop();
  const fromAddress =  transactionInfo.address;
  const toAddress = transactionInfo.recipient;
  const amount = transactionInfo.amount;

  const handleCancel = () => {
    resetTransaction();
    navigation.navigate('WalletHome', {
      screenToBeRendered: '',
      transactionInfo: ''
    });
  };

  return (
    <View style={Style.confirmScreen}>
      
      <Image 
        style={Style.confirmScreenImage} 
        source={Images.transfer} 
        resizeMode={'contain'} 
      />

      <Text style={Style.confirmScreenTitle}>{walletName}</Text>
      
      <View style={Style.confirmScreenValueContainer}>
        <Text style={Style.confirmScreenValueContainerText}>{fromAddress}</Text>
      </View>

      <Text style={Style.confirmScreenTypeText}>SENDING</Text>

      <Text style={Style.confirmScreenAmount}>{amount} RPD</Text>

      <Text style={Style.confirmScreenTypeText}>TO ADDRESS</Text>

      <View style={Style.confirmScreenValueContainer}>
        <Text style={Style.confirmScreenValueContainerText}>{toAddress}</Text>
      </View>
      

      <Text style={Style.confirmScreenTypeFeeText}>Network Fee -1.00 RPD</Text>
      <Text style={Style.confirmScreenTypeInfoText}>Ensure your are sending to a RPD Address</Text>
      
      {transactionErrorMessage && <Text>{transactionErrorMessage}</Text>}

      <Buttons 
        containerStyle={Style.confirmButton} 
        textStyle={Style.confirmButtonText} 
        text="Confirm Payment" 
        onPress={() => createTransaction(transactionInfo)} 
      />
      <Buttons 
        containerStyle={Style.cancelButton} 
        textStyle={Style.cancelButtonText}
        onPress={() => handleCancel()}
        text="Cancel" 
      />
      
    </View>
  );
}

ConfirmScreen.propTypes = {
}

export default ConfirmScreen;