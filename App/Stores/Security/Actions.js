import { createActions } from 'reduxsauce'

/**
 * We use reduxsauce's `createActions()` helper to easily create redux actions.
 *
 * Keys are action names and values are the list of parameters for the given action.
 *
 * Action names are turned to SNAKE_CASE into the `Types` variable. This can be used
 * to listen to actions:
 *
 * - to trigger reducers to update the state, for example in App/Stores/Security/Reducers.js
 * - to trigger sagas, for example in App/Sagas/index.js
 *
 * Actions can be dispatched:
 *
 * - in React components using `dispatch(...)`, for example in App/App.js
 * - in sagas using `yield put(...)`, for example in App/Sagas/SecuritySaga.js
 *
 * @see https://github.com/infinitered/reduxsauce#createactions
 */
const { Types, Creators } = createActions({
  // Set security informations
  setSecurity: ['security'],
  // The operation has started and is loading
  fetchSecurityLoading: null,
  // Security informations were successfully fetched
  fetchSecuritySuccess: ['security'],
  // An error occurred
  fetchSecurityFailure: ['errorMessage'],
})

export const SecurityTypes = Types
export default Creators
