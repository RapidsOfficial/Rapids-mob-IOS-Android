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
const transactionApiClient = axios.create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 50000,
});

function createTransaction(transactionInfo) {
  if (!transactionInfo.walletId || 
    !transactionInfo.amount ||
    !transactionInfo.recipient
    ) {
    return "Transaction info is Required";
  }

  return transactionApiClient.post('public/send', transactionInfo).then((response) => {
    if (response.data && response.data.returnData) {
      return response.data.returnData;
    }

    return null;
  })
  .catch(function (error) {
    // handle error
    return null;
  });;
}

async function fetchTransaction(transactionInfo) {
  if (!transactionInfo.walletId || !transactionInfo.transactionId) {
    return "Wallet ID & Transaction ID are Required";
  }

  return transactionApiClient.get(`public/send/${transactionInfo.transactionId}`, {walletId: transactionInfo.walletId}).then((response) => {
    if (in200s(response.status)) {
      return response.data;
    }

    return null;
  });
}

export const transactionService = {
  createTransaction,
  fetchTransaction
}
