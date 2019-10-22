import React, { useEffect, useState } from 'react';
import { View, Text, Clipboard } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import { Cards } from 'App/Theme';
import { Buttons, Input } from 'App/Theme';

import Style from './ReceiveStyle';

/**
 * This is an Wallet Receive Component.
 *
 */

const Receive = (props) => {
  const [ label, setLabel ] = useState('');
  const [ amount, setAmount ] = useState(0);

  const address = props.wallet && props.wallet.addresses ? props.wallet.addresses[0].address : '';

  copyAddress = () => {
    Clipboard.setString(address);
  };

  return (
    <View style={Style.receiveScreen}>
      <Cards 
        content={
          <View style={Style.cardContent}>
            <Text>Wallet Info!</Text>
            <Text>{'0M'}</Text>
            <Text>{address}</Text>
          </View>
        } 
      />

      <Text onPress={copyAddress}>Copy Address</Text>

      <QRCode
        value={address}
      />

      <Input 
        label="Label(optional)" 
        onChangeText={setLabel}
        value={label}
        textColor={"black"}
      />
      <Input 
        label="Amount" 
        onChangeText={setAmount}
        value={amount}
        textColor={"black"}
      />
      <View style={Style.createButton}>
        <Buttons text="Request Payment" onPress={() => props.receiveMoney(amount, label)} />
      </View>
      <View style={Style.createButton}>
        <Buttons text="Cancel" onPress={() => props.setScreen('Dashboard')} />
      </View>
    </View>
  );
}

Receive.propTypes = {
}

export default Receive;