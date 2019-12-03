import { takeLatest, all } from 'redux-saga/effects'
import { WalletTypes } from 'App/Stores/Wallet/Actions'
import { TransactionTypes } from 'App/Stores/Transaction/Actions'
import { BalanceTypes } from 'App/Stores/Balance/Actions'

import { StartupTypes } from 'App/Stores/Startup/Actions'
import { createWallet, fetchWallet, createBackup } from './WalletSaga'
import { createTransaction, fetchTransaction, fetchTransactions } from './TransactionSaga'
import { fetchBalance, fetchAddress } from './BalanceSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
   
    // Call `createWallet()` when a `CREATE_WALLET` action is triggered
    
    // WALLET
    takeLatest(WalletTypes.CREATE_WALLET, createWallet),

    takeLatest(WalletTypes.FETCH_WALLET, fetchWallet),

    takeLatest(WalletTypes.CREATE_BACKUP, createBackup),


    //TRANSACTIONS
    takeLatest(TransactionTypes.CREATE_TRANSACTION, createTransaction),

    takeLatest(TransactionTypes.FETCH_TRANSACTION, fetchTransaction),

    takeLatest(TransactionTypes.FETCH_TRANSACTIONS, fetchTransactions),


    //BALANCE
    takeLatest(BalanceTypes.FETCH_BALANCE, fetchBalance),

    takeLatest(BalanceTypes.FETCH_ADDRESS, fetchAddress),
  ])
}
