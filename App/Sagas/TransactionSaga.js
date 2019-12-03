import { put, call } from 'redux-saga/effects'
import TransactionActions from 'App/Stores/Transaction/Actions'
import { transactionService } from 'App/Services/TransactionService'
import NavigationService from 'App/Services/NavigationService'

/**
 * A saga can contain multiple functions.
 *
 * This transaction saga contains only to create a transaction.
 */
export function* createTransaction(action) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(TransactionActions.fetchTransactionLoading());
  // Create transaction from an API
  const transaction = yield call(transactionService.createTransaction, action.transactionInfo);

  if(!transaction.error) {
    const transactionInfoTemp = action.transactionInfo;
    const transactionInfo = {
      transactionId: transaction,
      date: new Date(),
      amount: transactionInfoTemp.amount ,
      address: transactionInfoTemp.address,
      walletId: transactionInfoTemp.walletId,
      recipient: transactionInfoTemp.recipient,
      label: transactionInfoTemp.label
    };
    yield put(TransactionActions.fetchTransactionSuccess(transactionInfo));
    NavigationService.navigate('PaymentCompleted');
  } else {
    yield put(
      TransactionActions.fetchTransactionFailure('There was an error while sending payment.')
    );
    
    NavigationService.navigate('WalletHome', {
      screenToBeRendered: "Send",
      transactionInfo: action.transactionInfo
    });
    // throw new Error(transaction.error)
  }
}

export function* fetchTransaction(action) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(TransactionActions.fetchTransactionLoading());

  const transaction = yield call(transactionService.fetchTransaction, action.transactionInfo);

  if (transaction) {
    yield put(TransactionActions.fetchTransactionSuccess(transaction));
  } else {
    yield put(
      TransactionActions.fetchTransactionFailure('There was an error while fetching transaction.')
    );
  }

  // Fetch transactions from an API

}


export function* fetchTransactions(action) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(Transaction.fetchTransactionLoading());

  const transactions = yield call(transactionService.fetchTransaction, action.transactionInfo);
  console.log(transactions, 'transaction')

  if (transaction) {
    yield put(Transaction.fetchTransactionsSuccess(transaction));
  } else {
    yield put(
      Transaction.fetchTransactionFailure('There was an error while fetching transactions.')
    );
  }

  // Fetch transactions from an API

}