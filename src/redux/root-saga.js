import { all, call } from "redux-saga/effects"

import channelSagas from "redux/channel/sagas"
import chatSagas from "redux/chat/sagas"

export default function* rootSaga() {
  yield all([call(channelSagas), call(chatSagas)])
}
