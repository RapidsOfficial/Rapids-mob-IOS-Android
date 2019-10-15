import React, { useState } from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import Style from './WalletInfoStyle';
import { Buttons, Input } from 'App/Theme'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * This is an Wallet Info component.
 *
 */

const WalletInfo = (props) => {
  const [ loading, setLoading ] = useState(false);
  const [ walletName, setWalletName ] = useState('');

  const createWallet = event => {

    const wallet = {
      walletName: walletName
    };

    axios.post('http://localhost:2017/public/wallet', wallet)
      .then(res => {
        console.log(res);
        console.log(res.data);
        if(res && res.data && res.data.walletUser) {

          const walletUser = res.data.walletUser;

          storeData = async () => {
            try {
              await AsyncStorage.setItem('@walletId', walletId);
            } catch (e) {
              // saving error
            }
          }
        }
      });
  };

  return (
    <View style={Style.container}>
      {loading ?
        <ActivityIndicator size="large" color="#0000ff" />
      : 
        <View>
          <View style={Style.content}>
            <Input 
              label="" 
              onChangeText={setWalletName}
            />
          </View>
          <View style={Style.createButton}>
            <Buttons text="Create Wallet" onPress={(e) => createWallet(e)} />
          </View>
        </View>
      }
    </View>
  )
}

WalletInfo.propTypes = {
}

export default WalletInfo;