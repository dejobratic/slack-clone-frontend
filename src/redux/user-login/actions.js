export const userLoginAction = {
  SIGN_IN_START: "SIGN_IN_START",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE: "SIGN_IN_FAILURE",

  SIGN_UP_START: "SIGN_UP_START",
  SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
  SIGN_UP_FAILURE: "SIGN_UP_FAILURE",
}

export const signIn = (credentials) => ({
  type: userLoginAction.SIGN_IN_START,
  payload: credentials,
})

export const signInSuccess = (user) => ({
  type: userLoginAction.SIGN_IN_SUCCESS,
  payload: user,
})

export const signInFailure = (errorMessage) => ({
  type: userLoginAction.SIGN_IN_FAILURE,
  payload: errorMessage,
})

export const signUp = (credentials) => ({
  type: userLoginAction.SIGN_UP_START,
  payload: credentials,
})

export const signUpSuccess = (user) => ({
  type: userLoginAction.SIGN_UP_SUCCESS,
  payload: user,
})

export const signUpFailure = (errorMessage) => ({
  type: userLoginAction.SIGN_UP_FAILURE,
  payload: errorMessage,
})
