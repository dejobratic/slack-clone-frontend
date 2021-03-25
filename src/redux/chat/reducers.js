import { chatAction } from "redux/chat/actions"

const INITIAL_STATE = {
  messages: [],
  errorMessage: null,
  loading: false,
}

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case chatAction.SEND_CHANNEL_MESSAGE_START:
    case chatAction.SEND_CHANNEL_MESSAGE_SUCCESS:
      return { ...state, errorMessage: null }

    case chatAction.GET_CHANNEL_MESSAGES_START:
      return { ...state, loading: true }

    case chatAction.GET_CHANNEL_MESSAGES_SUCCESS:
      return { ...state, messages: action.payload, loading: false }

    case chatAction.SEND_CHANNEL_MESSAGE_FAILURE:
    case chatAction.GET_CHANNEL_MESSAGES_FAILURE:
      return { ...state, errorMessage: action.payload }

    case chatAction.ADD_CHANNEL_MESSAGE_TO_CHAT:
      return { ...state, messages: [...state.messages, action.payload] }

    default:
      return state
  }
}

export default chatReducer
