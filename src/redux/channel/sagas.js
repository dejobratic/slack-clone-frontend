import { takeLatest, put, all, call } from "redux-saga/effects"

import {
  channelAction,
  addChannelSuccess,
  addChannelFailure,
} from "redux/channel/actions"

import { channelService } from "services/ChannelService"

function* addChannel({ payload: channelName }) {
  try {
    yield channelService.createChannel(channelName)
    yield put(addChannelSuccess())
  } catch (error) {
    yield put(addChannelFailure(error.message))
  }
}

function* onAddChannelStart() {
  yield takeLatest(channelAction.ADD_CHANNEL_START, addChannel)
}

export default function* channelSagas() {
  yield all([call(onAddChannelStart)])
}
