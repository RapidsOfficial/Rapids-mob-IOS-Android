/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { BalanceTypes } from './Actions'

export const fetchBalanceLoading = (state) => ({
  ...state,
  balanceIsLoading: true,
  errorMessage: null,
});

export const fetchBalanceSuccess = (state, { balance }) => ({
  ...state,
  balance: balance,
  balanceIsLoading: false,
  errorMessage: null,
});

export const fetchAddressSuccess = (state, { address }) => ({
  ...state,
  address: address,
  balanceIsLoading: false,
  errorMessage: null,
});

export const fetchBalanceFailure = (state, { errorMessage }) => ({
  ...state,
  balance: {},
  balanceIsLoading: false,
  errorMessage: errorMessage,
});

export const fetchAddressFailure = (state, { errorMessage }) => ({
  ...state,
  address: {},
  balanceIsLoading: false,
  errorMessage: errorMessage,
});

export const resetBalance = (state) => ({
  ...state,
  balance: {},
  address: {},
  balanceIsLoading: false,
  errorMessage: null,
});

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [BalanceTypes.FETCH_BALANCE_LOADING]: fetchBalanceLoading,
  [BalanceTypes.FETCH_BALANCE_SUCCESS]: fetchBalanceSuccess,
  [BalanceTypes.FETCH_ADDRESS_SUCCESS]: fetchAddressSuccess,
  [BalanceTypes.FETCH_BALANCE_FAILURE]: fetchBalanceFailure,
  [BalanceTypes.FETCH_ADDRESS_FAILURE]: fetchAddressFailure,
  [BalanceTypes.RESET_BALANCE]: resetBalance,
});
