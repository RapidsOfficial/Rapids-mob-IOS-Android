/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { SecurityTypes } from './Actions'

export const setSecurity = (state, { security }) => ({
  ...state,
  security: security,
  securityIsLoading: true,
  securityErrorMessage: null,
})

export const fetchSecurityLoading = (state) => ({
  ...state,
  securityIsLoading: true,
  securityErrorMessage: null,
})

export const fetchSecuritySuccess = (state, { security }) => ({
  ...state,
  security: security,
  securityIsLoading: false,
  securityErrorMessage: null,
})

export const fetchSecurityFailure = (state, { errorMessage }) => ({
  ...state,
  security: {},
  securityIsLoading: false,
  securityErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [SecurityTypes.SET_SECURITY]: setSecurity,
  [SecurityTypes.FETCH_SECURITY_LOADING]: fetchSecurityLoading,
  [SecurityTypes.FETCH_SECURITY_SUCCESS]: fetchSecuritySuccess,
  [SecurityTypes.FETCH_SECURITY_FAILURE]: fetchSecurityFailure
})
