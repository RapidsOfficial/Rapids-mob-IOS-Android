/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */
import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { WalletTypes } from './Actions'

export const fetchWalletLoading = (state) => ({
  ...state,
  walletIsLoading: true,
  walletErrorMessage: null,
})

export const fetchWalletSuccess = (state, { wallet }) => ({
  ...state,
  walletId: wallet.walletId,
  wallet: wallet,
  walletIsLoading: false,
  walletErrorMessage: null,
})

export const fetchWalletFailure = (state, { errorMessage }) => ({
  ...state,
  walletId: '',
  wallet: {},
  walletIsLoading: false,
  walletErrorMessage: errorMessage,
})

export const resetWallet = (state, { errorMessage }) => {
  return ({
    ...state,
    walletId: '',
    wallet: {},
    walletIsLoading: false,
    walletErrorMessage: errorMessage,
  });
}

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [WalletTypes.FETCH_WALLET_LOADING]: fetchWalletLoading,
  [WalletTypes.FETCH_WALLET_SUCCESS]: fetchWalletSuccess,
  [WalletTypes.FETCH_WALLET_FAILURE]: fetchWalletFailure,
  [WalletTypes.RESET_WALLET]: resetWallet,
})
