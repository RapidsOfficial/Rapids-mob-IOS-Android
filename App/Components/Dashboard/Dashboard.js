import React, { useEffect, useState } from 'react';
import { View, Alert, ScrollView, RefreshControl } from 'react-native';
import Style from './DashbaordStyle';
import { Header, BottomMenu, Home, Send, Receive, SelectWallet, WalletInfo, TransactionInfo } from 'App/Components';

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
  resetTransaction,
  fetchBalance,
  fetchTransactionFailure
}) => {
  const screenToBeRendered = navigation.getParam('screenToBeRendered') && navigation.getParam('transactionInfo') ? navigation.getParam('screenToBeRendered') : '';
  
  const [ screen, setScreen ] = useState(screenToBeRendered || 'Dashboard');
  const [ lastScreen, setLastScreen ] = useState('Dashboard');
  const [ selectedPaymentType, setSelectedPaymentType ] = useState('');
  const [ transactionModal, setTransactionModal ] = useState(false);
  const [ refreshing, setRefreshing ] = React.useState(false);

  useEffect(() => {
    if(wallets && wallets.length)
      fetchBalance(wallets);
  }, [wallets]);

  useEffect(() => {
    if(wallets && wallets.length && !wallets[0].backupId) {      
      selectWallet(wallets[0]);
      navigation.navigate('CreateWallet', {
        componentToBeRendered: "Mnemonic"
      });
    }
  },[]);
  
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    fetchBalance(wallets);
    setRefreshing(false);
  }, [refreshing]);

  const handleScreens = (selectedScreen, currentScreen) => {    
    setScreen(selectedScreen);
    setLastScreen(currentScreen);
  };

  const renderScreen = () => {    
    switch(screenToBeRendered || screen) {
      case 'Dashboard':
        return <Home 
          wallets={wallets}
          transactionModal={transactionModal} 
          selectedWallet={selectedWallet}
          selectWallet={selectWallet}
          setScreen={handleScreens} 
        />;
      case 'SelectWallet':
        return <SelectWallet 
          selectedPaymentType={selectedPaymentType}
          setScreen={handleScreens}
          wallets={wallets}
          selectWallet={selectWallet}
        />
      case 'Receive':
        return <Receive 
          selectedWallet={selectedWallet} 
          setScreen={handleScreens} 
        />;
      case 'Send':
        return <Send 
          navigation={navigation}
          setScreen={handleScreens}
          selectedWallet={selectedWallet} 
          createTransaction={createTransaction} 
          resetTransaction={resetTransaction}
          transactionInfoProp={navigation.getParam('transactionInfo')}
          transactionErrorMessage={transactionErrorMessage}
        />; 
      case 'AllTransactions':
        return <WalletInfo 
          setScreen={handleScreens}
          selectedWallet={selectedWallet} 
          createTransaction={createTransaction} 
        />; 
      case 'TransactionInfo':
        return <TransactionInfo 
          navigation={navigation}
          setScreen={handleScreens}
          selectedWallet={selectedWallet} 
          createTransaction={createTransaction} 
        />;   
    } 
  };
  
  const scrollDesign = 
    screen === 'Dashboard' || screen === 'AllTransactions' || screen === 'TransactionInfo' ?
    { flex:1, width: '100%' }
    :
    { flex:1, width: '100%', backgroundColor: 'white' }
  ;

  return (
      <View style={Style.container}>
        <Header 
          navigation={navigation} 
          screen={screen}
          setScreen={handleScreens}
          lastScreen={lastScreen}
        />
        <ScrollView 
          style={scrollDesign}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {renderScreen()}
        </ScrollView>
        
        <BottomMenu 
          transactionModal={transactionModal}
          setTransactionModal={setTransactionModal}
          setSelectedPaymentType={setSelectedPaymentType} 
          setScreen={handleScreens} 
          lastScreen={lastScreen}
          navigation={navigation}
        />
      </View>
  );
}

Dashboard.propTypes = {
}

export default Dashboard;