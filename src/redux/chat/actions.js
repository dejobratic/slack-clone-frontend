export const chatAction = {
  SEND_MESSAGE_START: "SEND_MESSAGE_START",
  SEND_MESSAGE_SUCCESS: "SEND_MESSAGE_SUCCESS",
  SEND_MESSAGE_FAILURE: "SEND_MESSAGE_FAILURE",

  GET_MESSAGES_START: "GET_MESSAGES_START",
  GET_MESSAGES_SUCCESS: "GET_MESSAGES_SUCCESS",
  GET_MESSAGES_FAILURE: "GET_MESSAGES_FAILURE",

  ADD_MESSAGE: "ADD_MESSAGE",
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

export const getMessages = (specification) => ({
  type: chatAction.GET_MESSAGES_START,
  payload: specification,
})

export const getMessagesSuccess = (messages) => ({
  type: chatAction.GET_MESSAGES_SUCCESS,
  payload: messages,
})

export const getMessagesFailure = (errorMessage) => ({
  type: chatAction.GET_MESSAGES_FAILURE,
  payload: errorMessage,
})

export const addMessage = (message) => ({
  type: chatAction.ADD_MESSAGE,
  payload: message,
})
