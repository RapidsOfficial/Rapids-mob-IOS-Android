/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */
import AsyncStorage from '@react-native-community/async-storage';
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
  wallet: wallet,
  walletIsLoading: false,
  walletErrorMessage: null,
})

export const fetchWalletFailure = (state, { errorMessage }) => ({
  ...state,
  wallet: {},
  walletIsLoading: false,
  walletErrorMessage: errorMessage,
})

export const resetWallet = (state, { errorMessage }) => {
  storeData = async () => {
    try {
      await AsyncStorage.removeItem('walletId');

    } catch (e) {
      console.log(e, 'error')
      // saving error
    }
  };

  storeData();
  return ({
    ...state,
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
