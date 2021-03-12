export const chatAction = {
  SEND_MESSAGE_START: "SEND_MESSAGE_START",
  SEND_MESSAGE_SUCCESS: "SEND_MESSAGE_SUCCESS",
  SEND_MESSAGE_FAILURE: "SEND_MESSAGE_FAILURE",
}

export const sendMessage = (message) => ({
  type: chatAction.SEND_MESSAGE_START,
  payload: message,
})

export const sendMessageSuccess = () => ({
  type: chatAction.SEND_MESSAGE_SUCCESS,
})

export const sendMessageFailure = (errorMessage) => ({
  type: chatAction.SEND_MESSAGE_FAILURE,
  payload: errorMessage,
})
