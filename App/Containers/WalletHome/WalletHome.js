import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import { connect } from 'react-redux';
import WalletActions from 'App/Stores/Wallet/Actions';
import BalanceActions from 'App/Stores/Balance/Actions';
import TransactionAction from 'App/Stores/Transaction/Actions';

import AsyncStorage from '@react-native-community/async-storage';
import { Dashboard, WalletLogin, WalletNew } from 'App/Components'
import { transactionService } from '../../Services/TransactionService';

/**
 * This is an Wallet Home Container.
 *
 */

class WalletHome extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      walletId: null
    };
  }

  componentDidMount() {
    this.walletData();
  }

  walletData = async () => {
    try {
      walletId = await AsyncStorage.getItem('walletId');

      if(!walletId && Object.keys(this.props.wallet).length) {
        walletId = this.prop.wallet.walletId;
      }

      this.setState({ walletId: walletId });
    } catch (e) {
      // saving error
    }
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.wallet !== this.props.wallet ){
      this.walletData();
    }
  }

  render() {
    const { walletId } = this.state;
    const { 
      wallet, walletIsLoading, balance, 
      fetchBalance, navigation, fetchTransactionSuccess,
      createTransaction, fetchTransactionLoading
    } = this.props;

    return (
      <View style={{flex: 1}}>
        {walletIsLoading || fetchTransactionLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          walletId && Object.keys(wallet).length ?
            <Dashboard
              key="dashboard"
              wallet={wallet}
              balance={balance}
              fetchBalance={fetchBalance}
              fetchTransactionSuccess={fetchTransactionSuccess}
              createTransaction={createTransaction}
              navigation={navigation}
            />
          :
            walletId ?
              <WalletLogin
                key="login"
              />
            :
              <WalletNew 
                key="new"
                {...this.props} 
              />
        )}
      </View>
    );
  }
}

WalletHome.propTypes = {
  
}

const mapStateToProps = (state) => ({
  wallet: state.wallet.wallet,
  balance: state.balance.balance,
  walletIsLoading: state.wallet.walletIsLoading,
  fetchTransactionLoading: state.transaction.fetchTransactionLoading,
  fetchWalletFailure: state.wallet.fetchWalletFailure,
  fetchTransactionSuccess: state.transaction.fetchTransactionSuccess
  // fetchBalanceLoading: state.wallet.fetchBalanceLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchBalance: (balanceInfo) => dispatch(BalanceActions.fetchBalance(balanceInfo)),
  createTransaction: (transactionInfo) => dispatch(TransactionAction.createTransaction(transactionInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletHome);