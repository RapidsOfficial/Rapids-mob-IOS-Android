import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import Style from './DashbaordStyle';
import { Header, BottomMenu, Home, Send, Receive, SelectWallet } from 'App/Components';

/**
 * This is an Wallet Dashboard Component.
 *
 */

const Dashboard = (props) => {
  const [ screen, setScreen ] = useState('Dashboard');
  const [ selectedPaymentType, setSelectedPaymentType ] = useState('');

  let balance = Object.keys(props.balance).length ? props.balance.balance : 0;
  
  useEffect(() => {
    if(props.wallets && props.wallets.length && props.wallets[0].walletId)
      props.fetchBalance({walletId: props.wallets[0].walletId});
  }, [props.wallets]);

  renderScreen = () => {
    switch(screen) {
      case 'Dashboard':
        return <Home balance={balance} />;
      case 'SelectWallet':
        return <SelectWallet 
          selectedPaymentType={selectedPaymentType}
          setScreen={setScreen}
          wallets={props.wallets}
          selectWallet={props.selectWallet}
        />
      case 'Receive':
        return <Receive 
          balance={balance} 
          setScreen={setScreen} 
          {...props} 
        />;
      case 'Send':
        return <Send 
          setScreen={setScreen}
          selectedWallet={props.selectedWallet} 
          createTransaction={props.createTransaction} 
        />; 
    } 
  };

  if(props.transactionErrorMessage) {
    if(props.selectedWallet && Object.keys(props.selectedWallet).length && props.selectedWallet[0].walletId)
      props.fetchBalance({walletId: props.selectedWallet[0].walletId});
    Alert.alert(
      'Error',
      JSON.stringify(props.transactionErrorMessage),
      [
        {text: 'OK', onPress: () => props.fetchTransactionFailure(false)},
      ],
      {cancelable: false},
    );
  }

  if(props.transaction) {
    Alert.alert(
      'Transaction Success',
      JSON.stringify(props.transaction),
      [
        {text: 'OK', onPress: () => props.fetchTransactionSuccess(false)},
      ],
      {cancelable: false},
    );
  }
  
  return (
    <View style={Style.container}>
      <Header {...props} />
      {renderScreen()}
      <BottomMenu setSelectedPaymentType={setSelectedPaymentType} setScreen={setScreen} {...props} />
    </View>
  );
}

Dashboard.propTypes = {
}

export default Dashboard;