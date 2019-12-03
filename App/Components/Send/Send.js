import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Cards } from 'App/Theme';
import { Buttons, Input, Images } from 'App/Theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ConfirmScreen } from 'App/Components';
import Style from './SendStyle';

/**
 * This is an Wallet Send Component.
 *
 */

const Send = ({ navigation, selectedWallet, setScreen, createTransaction, resetTransaction, transactionErrorMessage, transactionInfoProp }) => {
  const [ recipentName, setRecipentName ] = useState('');
  const [ recipentAddress, setRecipentAddress ] = useState('');
  const [ amount, setAmount ] = useState('');
  const [ transactionInfo, setTransactionInfo ] = useState(transactionInfoProp || '');
  const address = selectedWallet && selectedWallet.addresses ? selectedWallet.addresses[0].address : '';
  const walletId = selectedWallet && selectedWallet.walletId ? selectedWallet.walletId : '';
console.log(transactionInfo, '=-=-=-=-=-=-trans');

  useEffect(() => {
    return () => {
      setRecipentName('');
      setRecipentAddress('');
      setAmount('');
      setTransactionInfo('');
    }
  },[]);

  const setPayment = () => {
    if(!walletId || !amount || !recipentAddress) 
      return;

    const transactionInfo = {
      walletId: walletId,
      address: address,
      amount: Number(amount),
      recipient: recipentAddress,
      label: recipentName
    };

    setTransactionInfo(transactionInfo);
  };

  return (
    <View>
      {transactionInfo ?
        <ConfirmScreen 
          setScreen={setScreen}
          navigation={navigation}
          setTransactionInfo={setTransactionInfo} 
          transactionInfo={transactionInfo} 
          createTransaction={createTransaction} 
          resetTransaction={resetTransaction}
          selectedWallet={selectedWallet}
          transactionErrorMessage={transactionErrorMessage}
        />
      :
        <View style={Style.sendScreen}>
          <Text style={Style.selectWalletScreenTitle}>FROM ADDRESS</Text>
          <Cards 
            cardKey={selectedWallet.walletName}
            style={Style.cardSmall}
            content={
              <View style={Style.cardContent}>
                <Image 
                  style={Style.cardImage} 
                  source={Images.walletIcon} 
                  resizeMode={'contain'} 
                />
                <View style={Style.cardCurrentInfoSmall}>
                  <Text style={Style.cardCurrentInfoHeading}>{selectedWallet.walletId.split('-').pop()}</Text>
                  <Text style={Style.cardCurrentInfoBalanceValueSmall}>{selectedWallet.balance && selectedWallet.balance.balance ? selectedWallet.balance.balance: 0}</Text>
                  <Text style={Style.cardCurrentInfoCurrencyValueSmall}>{selectedWallet.addresses && selectedWallet.addresses.length ? selectedWallet.addresses[0].address: '' }</Text>
                </View>
                <View style={Style.cardRecentInfoSmall}>
                  <Icon style={Style.cardCurrentInfoBalanceImageSmall} name="close" size={30} color="#72F586" onPress={() => navigation.openDrawer()} />
                </View>
              </View>
            }
            onPress={() => {
              selectWallet(selectedWallet);
              setScreen(selectedPaymentType, 'Dashboard');  
            }} 
          />

          <Text style={Style.selectWalletScreenTitle}>TO ADDRESS</Text>
          
          <Input 
            label="Receiving Address(RPD)" 
            onChangeText={setRecipentAddress}
            value={recipentAddress}
            textColor={"black"}
          />

          {/* <View style={Style.qrButtonContainer}>
            <Buttons containerStyle={Style.qrButton} text="Send Payment" onPress={() => sendPayment()} />
          </View> */}

          <Input 
            label="Amount(RPD)" 
            onChangeText={setAmount}
            value={amount}
            textColor={"black"}
          />

          <Input 
            label="Label(Optional)" 
            onChangeText={setRecipentName}
            value={recipentName}
            textColor={"black"}
          />

          <Buttons 
            containerStyle={Style.sendButton} 
            textStyle={Style.sendButtonText} 
            text="Send Payment" 
            onPress={() => setPayment()} 
          />
          <Buttons 
            containerStyle={Style.cancelButton} 
            textStyle={Style.cancelButtonText}
            onPress={() => setScreen('Dashboard', 'Dashboard')}
            text="Cancel" 
          />
          
        </View>
      }
    </View>
    
  );
}

Send.propTypes = {
}

export default Send;