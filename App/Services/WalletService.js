import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
});
const in200s = isWithin(200, 299);

/**
 * This is a service that connects to a 3rd party API.
 *
 */
const walletApiClient = axios.create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 500000,
});

function createWallet(walletInfo) {
  if (!walletInfo.walletName) {
    return "Wallet Name is Required";
  }

  return walletApiClient.post('public/wallet', { walletName: walletInfo.walletName }).then((response) => {
    if (in200s(response.status)) {
      let wallets = walletInfo.wallets;
      wallets.push(response.data.walletUser);
      return wallets;
    }

    return null;
  })
  .catch((error) => {
    console.log(error)
    return null;
  });
}

async function fetchWallet(walletInfo) {
  if (!walletInfo.walletId || !walletInfo.walletPassword) {
    return "Wallet ID & Password are Required";
  }

  return walletApiClient.get('public/wallet', walletInfo).then((response) => {
    if (in200s(response.status)) {
      return response.data;
    }

    return null;
  });
}

export const walletService = {
  createWallet,
  fetchWallet
}
