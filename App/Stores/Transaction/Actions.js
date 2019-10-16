import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // Create Transaction
  createTransaction: ['transcationInfo'],
  //fetch Transaction informations
  fetchTransaction: ['transcationInfo'],
  // The operation has started and is loading
  fetchTransactions: ['transcationInfo'],
  // The operation has started and is loading
  fetchTransactionLoading: null,
  // Transaction informations were successfully fetched
  fetchTransactionSuccess: ['transaction'],
  // Transactions informations were successfully fetched
  fetchTransactionsSuccess: ['transactions'],
  // An error occurred
  fetchTransactionFailure: ['errorMessage'],
});

export const TransactionTypes = Types;
export default Creators;
