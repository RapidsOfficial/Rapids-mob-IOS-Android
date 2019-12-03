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

  componentWillMount() {
    this.props.fetchBalance();
  }

  render() {
    
    const { 
      walletId, wallets, selectWallet, 
      selectedWallet, walletIsLoading, balance, 
      fetchBalance, navigation, transaction,
      createTransaction, transactionIsLoading, transactionErrorMessage,
      fetchTransactionFailure, fetchTransactionSuccess, resetTransaction
    } = this.props;

    return (
      <View style={{flex: 1}}>
        {walletIsLoading || transactionIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) :
          walletId && wallets && wallets.length ? (
            <Dashboard
              key="dashboard"
              wallets={wallets}
              balance={balance}
              selectWallet={selectWallet}
              selectedWallet={selectedWallet}
              fetchBalance={fetchBalance}
              transaction={transaction}
              createTransaction={createTransaction}
              resetTransaction={resetTransaction}
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
  wallets: state.wallet.wallets,
  selectedWallet: state.wallet.selectedWallet,
  balance: state.balance.balance,
  walletIsLoading: state.wallet.walletIsLoading,
  transactionIsLoading: state.transaction.transactionIsLoading,
  fetchWalletFailure: state.wallet.fetchWalletFailure,
  transaction: state.transaction.transaction,
  transactionErrorMessage: state.transaction.transactionErrorMessage
});

const mapDispatchToProps = (dispatch) => ({
  selectWallet: (selectedWallet) => dispatch(WalletActions.selectWallet(selectedWallet)),
  fetchWalletFailure: () => dispatch(WalletActions.fetchWalletFailure()),
  fetchBalance: (wallets) => dispatch(BalanceActions.fetchBalance(wallets)),
  createTransaction: (transactionInfo) => dispatch(TransactionAction.createTransaction(transactionInfo)),
  fetchTransactionFailure: (errorMessage) => dispatch(TransactionAction.fetchTransactionFailure(errorMessage)),
  fetchTransactionSuccess: (transaction) => dispatch(TransactionAction.fetchTransactionSuccess(transaction)),
  resetTransaction: () => dispatch(TransactionAction.resetTransaction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletHome);