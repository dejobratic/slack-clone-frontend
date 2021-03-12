import { chatAction } from "redux/chat/actions"

const INITIAL_STATE = {
  errorMessage: null,
}

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case chatAction.SEND_MESSAGE_START:
    case chatAction.SEND_MESSAGE_SUCCESS:
      return { ...state, errorMessage: null }

    case chatAction.SEND_MESSAGE_FAILURE:
      return { ...state, errorMessage: action.payload }

    default:
      return state
  }
}

export default chatReducer
