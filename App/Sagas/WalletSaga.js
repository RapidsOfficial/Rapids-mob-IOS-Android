import { put, call } from 'redux-saga/effects'
import WalletActions from 'App/Stores/Wallet/Actions'
import { walletService } from 'App/Services/WalletService'
import AsyncStorage from '@react-native-community/async-storage';

/**
 * A saga can contain multiple functions.
 *
 * This wallet saga contains only to create a wallet.
 */
export function* createWallet(action) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(WalletActions.fetchWalletLoading());

  // Fetch wallet informations from an API
  const wallet = yield call(walletService.createWallet, action.walletInfo);

  if (wallet && wallet.walletUser) {
    storeData = async () => {
      try {
        await AsyncStorage.setItem('walletId', wallet.walletUser.walletId);
      } catch (e) {
        console.log(e, 'error')
        // saving error
      }
    };

    storeData();

    yield put(WalletActions.fetchWalletSuccess(wallet.walletUser));
  } else {
    yield put(
      WalletActions.fetchWalletFailure('There was an error while creating wallet.')
    );
  }
}


export function* fetchWallet(action) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(WalletActions.fetchWalletLoading());

  const wallet = yield call(walletService.fetchWallet);
  console.log(wallet, 'wallet')

  if (wallet) {
    yield put(WalletActions.fetchWalletSuccess(wallet.walletUser));
  } else {
    yield put(
      WalletActions.fetchWalletFailure('There was an error while fetching wallet.')
    );
  }

  // Fetch wallet informations from an API

}