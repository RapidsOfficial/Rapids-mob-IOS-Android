import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import Style from './DashbaordStyle';
import { Header, BottomMenu, Home, Send, Receive, SelectWallet } from 'App/Components';

/**
 * This is an Wallet Dashboard Component.
 *
 */

const Dashboard = ({
  wallets,
  transaction,
  selectedWallet,
  transactionErrorMessage,
  navigation,
  selectWallet,
  createTransaction,
  fetchBalance,
  fetchTransactionFailure
}) => {
  const [ screen, setScreen ] = useState('Dashboard');
  const [ selectedPaymentType, setSelectedPaymentType ] = useState('');
  
  useEffect(() => {
    if(wallets && wallets.length && wallets[0].walletId)
      fetchBalance(wallets);
  }, [wallets]);

  renderScreen = () => {
    switch(screen) {
      case 'Dashboard':
        return <Home 
          wallets={wallets} 
          selectedWallet={selectedWallet}
          selectWallet={selectWallet}
        />;
      case 'SelectWallet':
        return <SelectWallet 
          selectedPaymentType={selectedPaymentType}
          setScreen={setScreen}
          wallets={wallets}
          selectWallet={selectWallet}
        />
      case 'Receive':
        return <Receive 
          selectedWallet={selectedWallet} 
          setScreen={setScreen} 
        />;
      case 'Send':
        return <Send 
          setScreen={setScreen}
          selectedWallet={selectedWallet} 
          createTransaction={createTransaction} 
        />; 
    } 
  };

  if(transactionErrorMessage) {
    if(selectedWallet && Object.keys(selectedWallet).length && selectedWallet[0].walletId)
      fetchBalance(wallets);
    Alert.alert(
      'Error',
      JSON.stringify(transactionErrorMessage),
      [
        {text: 'OK', onPress: () => fetchTransactionFailure(false)},
      ],
      {cancelable: false},
    );
  }

  if(transaction) {
    Alert.alert(
      'Transaction Success',
      JSON.stringify(transaction),
      [
        {text: 'OK', onPress: () => fetchTransactionSuccess(false)},
      ],
      {cancelable: false},
    );
  }
  
  return (
    <View style={Style.container}>
      <Header navigation={navigation} />
      {renderScreen()}
      <BottomMenu 
        setSelectedPaymentType={setSelectedPaymentType} 
        setScreen={setScreen} 
        navigation={navigation}
      />
    </View>
  );
}

Dashboard.propTypes = {
}

export default Dashboard;