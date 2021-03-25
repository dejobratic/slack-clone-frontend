export const chatAction = {
  SEND_CHANNEL_MESSAGE_START: "SEND_CHANNEL_MESSAGE_START",
  SEND_CHANNEL_MESSAGE_SUCCESS: "SEND_CHANNEL_MESSAGE_SUCCESS",
  SEND_CHANNEL_MESSAGE_FAILURE: "SEND_CHANNEL_MESSAGE_FAILURE",

  GET_CHANNEL_MESSAGES_START: "GET_CHANNEL_MESSAGES_START",
  GET_CHANNEL_MESSAGES_SUCCESS: "GET_CHANNEL_MESSAGES_SUCCESS",
  GET_CHANNEL_MESSAGES_FAILURE: "GET_CHANNEL_MESSAGES_FAILURE",

  ADD_CHANNEL_MESSAGE_TO_CHAT: "ADD_CHANNEL_MESSAGE_TO_CHAT",
}

export const sendChannelMessage = (message) => ({
  type: chatAction.SEND_CHANNEL_MESSAGE_START,
  payload: message,
})

export const sendChannelMessageSuccess = () => ({
  type: chatAction.SEND_CHANNEL_MESSAGE_SUCCESS,
})

export const sendChannelMessageFailure = (errorMessage) => ({
  type: chatAction.SEND_CHANNEL_MESSAGE_FAILURE,
  payload: errorMessage,
})

export const getChannelMessages = (specification) => ({
  type: chatAction.GET_CHANNEL_MESSAGES_START,
  payload: specification,
})

export const getChannelMessagesSuccess = (messages) => ({
  type: chatAction.GET_CHANNEL_MESSAGES_SUCCESS,
  payload: messages,
})

export const getChannelMessagesFailure = (errorMessage) => ({
  type: chatAction.GET_CHANNEL_MESSAGES_FAILURE,
  payload: errorMessage,
})

export const addChannelMessageToChat = (message) => ({
  type: chatAction.ADD_CHANNEL_MESSAGE_TO_CHAT,
  payload: message,
})
