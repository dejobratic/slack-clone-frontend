import { channelAction } from "redux/channel/actions"

const INITIAL_STATE = {
  current: null,
  errorMessage: null,
  loading: true,
}

const channelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case channelAction.ADD_CHANNEL_START:
      return { ...state, errorMessage: null, loading: true }

    case channelAction.ADD_CHANNEL_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        loading: false,
        current: action.payload,
      }

    case channelAction.ADD_CHANNEL_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
      }

    default:
      return state
  }
}

export default channelReducer
