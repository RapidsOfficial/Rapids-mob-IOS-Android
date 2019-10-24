import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Cards } from 'App/Theme';
import { Buttons, Input } from 'App/Theme';

import Style from './SendStyle';

/**
 * This is an Wallet Send Component.
 *
 */

const Send = ({ selectedWallet, setScreen, createTransaction }) => {
  const [ recipentName, setRecipentName ] = useState('');
  const [ recipentAddress, setRecipentAddress ] = useState('');
  const [ amount, setAmount ] = useState(0);

  const address = selectedWallet && selectedWallet.addresses ? selectedWallet.addresses[0].address : '';
  const walletId = selectedWallet && selectedWallet.walletId ? selectedWallet.walletId : '';

  sendPayment = () => {
    if(!walletId || !amount || !recipentAddress) 
      return;

    const transactionInfo = {
      walletId: walletId,
      address: address,
      amount: Number(amount),
      recipient: recipentAddress
    };

    createTransaction(transactionInfo);
  };

  return (
    <View style={Style.sendScreen}>
      <Cards 
        content={
          <View style={Style.cardContent}>
            <Text>Wallet Info!</Text>
            <Text>{'0M'}</Text>
            <Text>{address}</Text>
          </View>
        } 
      />
      <View>
        <Input 
          label="Recipent Name" 
          onChangeText={setRecipentName}
          value={recipentName}
          textColor={"black"}
        />
        <Input 
          label="Recipent Address" 
          onChangeText={setRecipentAddress}
          value={recipentAddress}
          textColor={"black"}
        />
        <Input 
          label="Amount" 
          onChangeText={setAmount}
          value={amount}
          textColor={"black"}
        />
        <View style={Style.createButton}>
          <Buttons text="Send Payment" onPress={() => sendPayment()} />
        </View>
        <View style={Style.createButton}>
          <Buttons text="Cancel" onPress={() => setScreen('Dashboard')} />
        </View>
      </View>
      
    </View>
  );
}

Send.propTypes = {
}

export default Send;