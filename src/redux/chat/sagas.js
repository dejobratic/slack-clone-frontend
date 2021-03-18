import { takeLatest, put, all, call } from "redux-saga/effects"

import {
  chatAction,
  sendMessageSuccess,
  sendMessageFailure,
  getMessagesSuccess,
  getMessagesFailure,
} from "redux/chat/actions"

import { messageService } from "services/MessageService"

function* sendMessage({ payload: message }) {
  try {
    yield messageService.sendMessage(message)
    yield put(sendMessageSuccess())
  } catch (error) {
    yield put(sendMessageFailure(error.message))
  }
}

function* getMessages({ payload: specification }) {
  try {
    const messages = yield messageService.getMessages(specification)
    yield put(getMessagesSuccess(messages))
  } catch (error) {
    yield put(getMessagesFailure(error.message))
  }
}

function* onSendMessageStart() {
  yield takeLatest(chatAction.SEND_MESSAGE_START, sendMessage)
}

function* onGetMessagesStart() {
  yield takeLatest(chatAction.GET_MESSAGES_START, getMessages)
}

export default function* chatSagas() {
  yield all([call(onSendMessageStart), call(onGetMessagesStart)])
}
