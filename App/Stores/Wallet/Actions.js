import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // Create wallet
  createWallet: ['walletInfo'],
  //fetch wallet informations
  fetchWallet: ['walletInfo'],
  // The operation has started and is loading
  fetchWalletLoading: null,
  // User informations were successfully fetched
  fetchWalletSuccess: ['wallet'],
  // An error occurred
  fetchWalletFailure: ['errorMessage'],
});

export const WalletTypes = Types;
export default Creators;
