import { channelAction } from "redux/channel/actions"

const INITIAL_STATE = {
  all: [],
  current: null,
  errorMessage: null,
  loading: false,
}

const channelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case channelAction.GET_SUBSCRIBED_CHANNELS_START:
    case channelAction.CREATE_CHANNEL_START:
    case channelAction.UPDATE_CHANNEL_START:
      return { ...state, errorMessage: null, loading: true }

    case channelAction.GET_SUBSCRIBED_CHANNELS_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        loading: false,
        all: action.payload,
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
        current:
          state.current.id === action.payload.id
            ? {
                ...state.current,
                name: action.payload.name,
                description: action.payload.description,
              }
            : state.current,
        all: state.all.map((channel) =>
          channel.id === action.payload.id
            ? {
                ...channel,
                name: action.payload.name,
                description: action.payload.description,
              }
            : channel
        ),
      }

    case channelAction.GET_SUBSCRIBED_CHANNELS_FAILURE:
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
        current: state.all.find((channel) => channel.id === action.payload),
      }

    default:
      return state
  }
}

export default channelReducer
