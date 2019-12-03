/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
  security: {
    sixDigitPin: false,
    sixDigitPinLogin: false,
    touchIdLogin: false,
    touchIdInApp: false
  },
  securityIsLoading: false,
  securityErrorMessage: null,
}
