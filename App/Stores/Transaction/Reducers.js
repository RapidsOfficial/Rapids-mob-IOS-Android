/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { TransactionTypes } from './Actions'

export const fetchTransactionLoading = (state) => ({
  ...state,
  transactionIsLoading: true,
  transactionErrorMessage: null,
})

export const fetchTransactionSuccess = (state, { transaction }) => ({
  ...state,
  transaction: transaction,
  transactionIsLoading: false,
  transactionErrorMessage: null,
})

export const fetchTransactionsSuccess = (state, { transactions }) => ({
  ...state,
  transactions: transactions,
  transactionIsLoading: false,
  transactionErrorMessage: null,
})

export const fetchTransactionFailure = (state, { errorMessage }) => ({
  ...state,
  transaction: '',
  transactionIsLoading: false,
  transactionErrorMessage: errorMessage,
})

export const resetTransaction = (state) => ({
  ...state,
  transaction: '',
  transactionIsLoading: false,
  transactionErrorMessage: null,
});

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [TransactionTypes.FETCH_TRANSACTION_LOADING]: fetchTransactionLoading,
  [TransactionTypes.FETCH_TRANSACTION_SUCCESS]: fetchTransactionSuccess,
  [TransactionTypes.FETCH_TRANSACTIONS_SUCCESS]: fetchTransactionsSuccess,
  [TransactionTypes.FETCH_TRANSACTION_FAILURE]: fetchTransactionFailure,
  [TransactionTypes.RESET_TRANSACTION]: resetTransaction,
})
