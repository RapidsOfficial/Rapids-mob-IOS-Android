import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // Create wallet
  createWallet: ['walletInfo'],
  // Select Wallet
  selectWallet: ['selectedWallet'],
  //fetch wallet informations
  fetchWallet: ['walletInfo'],
  // The operation has started and is loading
  fetchWalletLoading: null,
  // User informations were successfully fetched
  fetchWalletSuccess: ['wallets'],
  // An error occurred
  fetchWalletFailure: ['errorMessage'],
  //reset Wallet
  resetWallet: null,
  //setNavigation
  setNavigation: ["navigations"]
});

export const WalletTypes = Types;
export default Creators;
