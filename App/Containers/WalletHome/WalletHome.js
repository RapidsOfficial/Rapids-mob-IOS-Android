import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import { connect } from 'react-redux';
import WalletActions from 'App/Stores/Wallet/Actions';
import BalanceActions from 'App/Stores/Balance/Actions';
import TransactionAction from 'App/Stores/Transaction/Actions';

import { Dashboard, WalletLogin, WalletNew } from 'App/Components'

/**
 * This is an Wallet Home Container.
 *
 */

class WalletHome extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const { 
      walletId, wallet, walletIsLoading, balance, 
      fetchBalance, navigation, transaction,
      createTransaction, transactionIsLoading, transactionErrorMessage,
      fetchTransactionFailure, fetchTransactionSuccess
    } = this.props;
    
    return (
      <View style={{flex: 1}}>
        {walletIsLoading || transactionIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) :
          walletId && Object.keys(wallet).length ? (
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
          )
          :
            walletId ?
            (
              <WalletLogin
                key="login"
              />
            )
            :
            !walletId &&
            (
              <WalletNew 
                key="new"
                {...this.props} 
              />
            )
        }
      </View>
    );
  }
}

WalletHome.propTypes = {
  
}

const mapStateToProps = (state) => ({
  walletId: state.wallet.walletId,
  wallet: state.wallet.wallet,
  balance: state.balance.balance,
  walletIsLoading: state.wallet.walletIsLoading,
  transactionIsLoading: state.transaction.transactionIsLoading,
  fetchWalletFailure: state.wallet.fetchWalletFailure,
  transaction: state.transaction.transaction,
  transactionErrorMessage: state.transaction.transactionErrorMessage
});

const mapDispatchToProps = (dispatch) => ({
  fetchWalletFailure: () => dispatch(WalletActions.fetchWalletFailure()),
  fetchBalance: (balanceInfo) => dispatch(BalanceActions.fetchBalance(balanceInfo)),
  createTransaction: (transactionInfo) => dispatch(TransactionAction.createTransaction(transactionInfo)),
  fetchTransactionFailure: (errorMessage) => dispatch(TransactionAction.fetchTransactionFailure(errorMessage)),
  fetchTransactionSuccess: (transaction) => dispatch(TransactionAction.fetchTransactionSuccess(transaction))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletHome);