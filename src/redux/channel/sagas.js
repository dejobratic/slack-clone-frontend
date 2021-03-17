import { takeLatest, put, all, call } from "redux-saga/effects"

import {
  channelAction,
  getAllChannelsSuccess,
  getAllChannelsFailure,
  createChannelSuccess,
  createChannelFailure,
} from "redux/channel/actions"

import { channelService } from "services/ChannelService"

function* getAllChannels() {
  try {
    const channels = yield channelService.getAll()
    yield put(getAllChannelsSuccess(channels))
  } catch (error) {
    yield put(getAllChannelsFailure(error.message))
  }
}

function* createChannel({ payload: channelName }) {
  try {
    yield channelService.create(channelName)
    yield put(createChannelSuccess())
  } catch (error) {
    yield put(createChannelFailure(error.message))
  }
}

function* onGetAllChannelsStart() {
  yield takeLatest(channelAction.GET_ALL_CHANNELS_START, getAllChannels)
}

function* onCreateChannelStart() {
  yield takeLatest(channelAction.CREATE_CHANNEL_START, createChannel)
}

export default function* channelSagas() {
  yield all([call(onCreateChannelStart), call(onGetAllChannelsStart)])
}
