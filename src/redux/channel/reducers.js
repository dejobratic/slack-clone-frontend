import { channelAction } from "redux/channel/actions"

import {
  updateChannelIfMatches,
  updateChannelInList,
  addChannelToList,
  removeChannelFromList,
} from "redux/channel/utils"

const INITIAL_STATE = {
  all: [],
  subscribed: [],
  current: null,
  errorMessage: null,
  loading: false,
}

const channelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case channelAction.LOAD_ALL_CHANNELS_START:
    case channelAction.LOAD_SUBSCRIBED_CHANNELS_START:
    case channelAction.SUBSCRIBE_TO_CHANNEL_START:
    case channelAction.UNSUBSCRIBE_FROM_CHANNEL_START:
    case channelAction.CREATE_CHANNEL_START:
    case channelAction.UPDATE_CHANNEL_START:
      return { ...state, errorMessage: null, loading: true }

    case channelAction.LOAD_ALL_CHANNELS_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        loading: false,
        all: action.payload,
      }

    case channelAction.LOAD_SUBSCRIBED_CHANNELS_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        loading: false,
        subscribed: action.payload,
      }

    case channelAction.SUBSCRIBE_TO_CHANNEL_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        subscribed: addChannelToList(state.subscribed, action.payload),
        all: updateChannelInList(state.all, action.payload),
      }

    case channelAction.UNSUBSCRIBE_FROM_CHANNEL_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        subscribed: removeChannelFromList(state.subscribed, action.payload),
        all: updateChannelInList(state.all, action.payload),
      }

    case channelAction.CREATE_CHANNEL_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        loading: false,
        all: [...state.all, action.payload],
      }

    case channelAction.UPDATE_CHANNEL_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        loading: false,
        current: updateChannelIfMatches(state.current, action.payload),
        subscribed: updateChannelInList(state.subscribed, action.payload),
        all: updateChannelInList(state.all, action.payload),
      }

    case channelAction.LOAD_ALL_CHANNELS_FAILURE:
    case channelAction.LOAD_SUBSCRIBED_CHANNELS_FAILURE:
    case channelAction.SUBSCRIBE_TO_CHANNEL_FAILURE:
    case channelAction.UNSUBSCRIBE_FROM_CHANNEL_FAILURE:
    case channelAction.CREATE_CHANNEL_FAILURE:
    case channelAction.UPDATE_CHANNEL_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
      }

    case channelAction.OPEN_CHANNEL:
      return {
        ...state,
        errorMessage: null,
        loading: false,
        current: state.subscribed.find(
          (channel) => channel.id === action.payload
        ),
      }

    default:
      return state
  }
}

export default channelReducer
