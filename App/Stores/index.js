import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as ExampleReducer } from './Example/Reducers'
import { reducer as WalletReducer } from './Wallet/Reducers'
import { reducer as TransactionReducer } from './Transaction/Reducers'
import { reducer as BalanceReducer } from './Balance/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    example: ExampleReducer,
    wallet: WalletReducer,
    transaction: TransactionReducer,
    balance: BalanceReducer
  });

  return configureStore(rootReducer, rootSaga);
}
