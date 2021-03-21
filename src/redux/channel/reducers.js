import { channelAction } from "redux/channel/actions"

const INITIAL_STATE = {
  all: [],
  current: null,
  errorMessage: null,
  loading: false,
}

const channelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case channelAction.GET_ALL_CHANNELS_START:
      return { ...state, errorMessage: null, loading: true }

    case channelAction.GET_ALL_CHANNELS_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        loading: false,
        all: action.payload,
      }

    case channelAction.CREATE_NEW_CHANNEL_START:
      return { ...state, errorMessage: null, loading: true }

    case channelAction.CREATE_NEW_CHANNEL_SUCCESS:
      return { ...state, errorMessage: null, loading: false }

    case channelAction.GET_ALL_CHANNELS_FAILURE:
    case channelAction.CREATE_NEW_CHANNEL_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
      }

    case channelAction.ADD_CHANNEL:
      return {
        ...state,
        all: [...state.all, action.payload],
      }

    case channelAction.OPEN_CHANNEL:
      return {
        ...state,
        errorMessage: null,
        loading: false,
        current: action.payload,
      }

    default:
      return state
  }
}

export default channelReducer
