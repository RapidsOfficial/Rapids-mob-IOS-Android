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
const balanceApiClient = axios.create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 150000,
});

async function fetchBalance(wallets) {
  if (!wallets || !wallets.length ) {
    return "Address is Required";
  }
  
  let walletsInfo = wallets.map(async wallet => {
    let balance = await balanceApiClient.get(`public/address?walletId=${wallet.walletId}`).then((response) => {

      if (in200s(response.status)) {
        return response.data.balance;
      }
      throw new Error(response);
    })
    .catch(function (error) {
      throw new Error(error);
    });

    wallet['balance'] = balance;
    return wallet;
  });
  
  await Promise.all(walletsInfo).then(function(results) {
    wallets = results;
  });
  
  return wallets;
}

async function fetchAddress(transactionInfo) {
  if (!transactionInfo.walletId) {
    return "Wallet ID is Required";
  }

  return transactionApiClient.get(`public/address`, {walletId: transactionInfo.walletId}).then((response) => {
    if (in200s(response.status)) {
      return response.data;
    }

    throw new Error(response);
    return null;
  });
}

export const balanceService = {
  fetchBalance,
  fetchAddress
}
