import { takeLatest, put, all, call } from "redux-saga/effects"

import {
  chatAction,
  getMessagesSuccess,
  getMessagesFailure,
} from "redux/chat/actions"

import { messageService } from "services/MessageService"

function* getMessages({ payload: specification }) {
  try {
    const messages = yield messageService.getMessages(specification)
    yield put(getMessagesSuccess(messages))
  } catch (error) {
    yield put(getMessagesFailure(error.message))
  }
}

function* onGetMessagesStart() {
  yield takeLatest(chatAction.GET_MESSAGES_START, getMessages)
}

export default function* chatSagas() {
  yield all([call(onGetMessagesStart)])
}
