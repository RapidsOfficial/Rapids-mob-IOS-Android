import React, { useEffect, useState } from 'react';
import { View, Text, Modal, Alert, TouchableHighlight } from 'react-native';
import Style from './DashbaordStyle';
import { Header, BottomMenu, Home, Send } from 'App/Components';
import { Receive } from '..';

/**
 * This is an Wallet Dashboard Component.
 *
 */

const Dashboard = (props) => {
  const [ screen, setScreen ] = useState('Dashboard');
  let balance = Object.keys(props.balance).length ? props.balance.balance : 0;
  
  useEffect(() => {
    if(props.wallet.walletId)
      props.fetchBalance({walletId: props.wallet.walletId});
  }, [props.wallet]);

  renderScreen = () => {
    switch(screen) {
      case 'Dashboard':
        return <Home balance={balance} />;
      case 'Receive':
        return <Receive balance={balance} setScreen={setScreen} {...props} />;
      case 'Send':
          return <Send balance={balance} setScreen={setScreen} {...props} />; 
    } 
  };

  if(props.transactionErrorMessage) {
    props.fetchBalance({walletId: props.wallet.walletId});
    Alert.alert(
      'Error',
      props.transactionErrorMessage,
      [
        {text: 'OK', onPress: () => props.fetchTransactionFailure(false)},
      ],
      {cancelable: false},
    );
  }

  if(props.transaction) {
    Alert.alert(
      'Transaction Success',
      props.transaction,
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
      <BottomMenu setScreen={setScreen} {...props} />
    </View>
  );
}

Dashboard.propTypes = {
}

export default Dashboard;