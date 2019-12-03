import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // Create Transaction
  createTransaction: ['transactionInfo'],
  //fetch Transaction informations
  fetchTransaction: ['transactionInfo'],
  // The operation has started and is loading
  fetchTransactions: ['transactionInfo'],
  // The operation has started and is loading
  fetchTransactionLoading: null,
  // Transaction informations were successfully fetched
  fetchTransactionSuccess: ['transaction'],
  // Transactions informations were successfully fetched
  fetchTransactionsSuccess: ['transactions'],
  // An error occurred
  fetchTransactionFailure: ['errorMessage'],
  //reset Transaction
  resetTransaction: null
});

export const TransactionTypes = Types;
export default Creators;
