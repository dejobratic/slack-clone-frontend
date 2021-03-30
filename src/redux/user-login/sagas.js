import { takeLatest, put, all, call } from "redux-saga/effects"

import {
  userLoginAction,
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
} from "redux/user-login/actions"

import { userLoginService } from "services/UserLoginService"

function* signIn({ payload: credentials }) {
  try {
    const user = yield userLoginService.signIn(credentials)
    yield put(signInSuccess(user))
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

function* signUp({ payload: credentials }) {
  try {
    const user = yield userLoginService.signUp(credentials)
    yield put(signUpSuccess(user))
  } catch (error) {
    yield put(signUpFailure(error.message))
  }
}

function* onSignInStart() {
  yield takeLatest(userLoginAction.SIGN_IN_START, signIn)
}

function* onSignUpStart() {
  yield takeLatest(userLoginAction.SIGN_UP_START, signUp)
}

export default function* userLoginSagas() {
  yield all([call(onSignInStart), call(onSignUpStart)])
}
