import { takeLatest, put, all, call } from "redux-saga/effects"

import {
  chatAction,
  sendMessageSuccess,
  sendMessageFailure,
} from "redux/chat/actions"

import { chatService } from "services/ChatService"

function* sendMessage({ payload: text }) {
  try {
    yield chatService.sendMessage(text)
    yield put(sendMessageSuccess())
  } catch (error) {
    yield put(sendMessageFailure(error.message))
  }
}

function* onSendMessageStart() {
  yield takeLatest(chatAction.ADD_CHANNEL_START, sendMessage)
}

export default function* chatSagas() {
  yield all([call(onSendMessageStart)])
}
