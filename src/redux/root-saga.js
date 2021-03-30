import { all, call } from "redux-saga/effects"

import userLoginSaga from "redux/user-login/sagas"

export default function* rootSaga() {
  yield all([call(userLoginSaga)])
}
