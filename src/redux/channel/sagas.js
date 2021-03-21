import { takeLatest, put, all, call } from "redux-saga/effects"

import {
  channelAction,
  getAllChannelsSuccess,
  getAllChannelsFailure,
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

function* onGetAllChannelsStart() {
  yield takeLatest(channelAction.GET_ALL_CHANNELS_START, getAllChannels)
}

export default function* channelSagas() {
  yield all([call(onGetAllChannelsStart)])
}
