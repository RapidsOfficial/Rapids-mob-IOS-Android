import { put, call } from 'redux-saga/effects'
import WalletActions from 'App/Stores/Wallet/Actions'
import { walletService } from 'App/Services/WalletService'
import NavigationService from 'App/Services/NavigationService'

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
  const response = yield call(walletService.createWallet, action.walletInfo);
  const wallets = response.wallets;

  if (wallets && wallets.length) {
    yield put(WalletActions.fetchWalletSuccess(wallets));
   
    if(!response.data.backupId) {
      let data = response.data;
      yield put(WalletActions.selectWallet(data));
      NavigationService.navigate('CreateWallet', {
        componentToBeRendered: "Mnemonic"
      });
    } else {
      NavigationService.navigate('WalletHome');
    }

  } else {
    yield put(
      WalletActions.fetchWalletFailure('There was an error while creating wallet.')
    );
    throw new Error(wallets);
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


export function* createBackup(action) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(WalletActions.fetchWalletLoading());

  // Fetch wallet informations from an API
  const wallets = yield call(walletService.createBackup, action.backupInfo);

  if (wallets && wallets.length) {
    yield put(WalletActions.fetchWalletSuccess(wallets));
    NavigationService.navigate('WalletHome');
  } else {
    yield put(
      WalletActions.fetchWalletFailure('There was an error while creating wallet.')
    );
    throw new Error(wallets)
  }

}