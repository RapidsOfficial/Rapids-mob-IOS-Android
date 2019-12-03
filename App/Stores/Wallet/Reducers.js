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

export const fetchWalletSuccess = (state, { wallets }) => ({
  ...state,
  walletId: wallets && wallets.length ? wallets[0].walletId : '',
  wallets: wallets,
  walletIsLoading: false,
  walletErrorMessage: null,
})

export const selectWallet = (state, { selectedWallet }) => ({
  ...state,
  selectedWallet: selectedWallet,
  // walletId: selectedWallet && selectedWallet.length ? selectedWallet.walletId : '',
  walletIsLoading: false,
  walletErrorMessage: null,
})

export const fetchWalletFailure = (state, { errorMessage }) => ({
  ...state,
  walletId: '',
  walletIsLoading: false,
  walletErrorMessage: errorMessage,
})

export const resetWallet = (state, { errorMessage }) => {
  return ({
    ...state,
    walletId: '',
    wallets: [],
    wallet: {},
    selectedWallet: {},
    walletIsLoading: false,
    walletErrorMessage: errorMessage,
  });
}

export const setNavigation = (state, { navigation }) => {
  return ({
    ...state,
    navigations: navigations
  });
}

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [WalletTypes.SELECT_WALLET]: selectWallet,
  [WalletTypes.FETCH_WALLET_LOADING]: fetchWalletLoading,
  [WalletTypes.FETCH_WALLET_SUCCESS]: fetchWalletSuccess,
  [WalletTypes.FETCH_WALLET_FAILURE]: fetchWalletFailure,
  [WalletTypes.RESET_WALLET]: resetWallet,
  [WalletTypes.SET_NAVIGATION]: setNavigation,

})
