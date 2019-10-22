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
      fetchBalance, navigation, transaction,
      createTransaction, transactionIsLoading, transactionErrorMessage,
      fetchTransactionFailure, fetchTransactionSuccess
    } = this.props;

    return (
      <View style={{flex: 1}}>
        {walletIsLoading || transactionIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          walletId && Object.keys(wallet).length ?
            <Dashboard
              key="dashboard"
              wallet={wallet}
              balance={balance}
              fetchBalance={fetchBalance}
              transaction={transaction}
              createTransaction={createTransaction}
              fetchTransactionFailure={fetchTransactionFailure}
              fetchTransactionSuccess={fetchTransactionSuccess}
              transactionErrorMessage={transactionErrorMessage}
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
  transactionIsLoading: state.transaction.transactionIsLoading,
  fetchWalletFailure: state.wallet.fetchWalletFailure,
  transaction: state.transaction.transaction,
  transactionErrorMessage: state.transaction.transactionErrorMessage
  // fetchBalanceLoading: state.wallet.fetchBalanceLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchBalance: (balanceInfo) => dispatch(BalanceActions.fetchBalance(balanceInfo)),
  createTransaction: (transactionInfo) => dispatch(TransactionAction.createTransaction(transactionInfo)),
  fetchTransactionFailure: (errorMessage) => dispatch(TransactionAction.fetchTransactionFailure(errorMessage)),
  fetchTransactionSuccess: (transaction) => dispatch(TransactionAction.fetchTransactionSuccess(transaction))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletHome);