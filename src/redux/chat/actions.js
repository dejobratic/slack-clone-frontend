export const chatAction = {
  SEND_CHANNEL_MESSAGE_START: "SEND_CHANNEL_MESSAGE_START",
  SEND_CHANNEL_MESSAGE_SUCCESS: "SEND_CHANNEL_MESSAGE_SUCCESS",
  SEND_CHANNEL_MESSAGE_FAILURE: "SEND_CHANNEL_MESSAGE_FAILURE",

  LOAD_CHANNEL_MESSAGES_START: "LOAD_CHANNEL_MESSAGES_START",
  LOAD_CHANNEL_MESSAGES_SUCCESS: "LOAD_CHANNEL_MESSAGES_SUCCESS",
  LOAD_CHANNEL_MESSAGES_FAILURE: "LOAD_CHANNEL_MESSAGES_FAILURE",

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

export const loadChannelMessages = (specification) => ({
  type: chatAction.LOAD_CHANNEL_MESSAGES_START,
  payload: specification,
})

export const loadChannelMessagesSuccess = (messages) => ({
  type: chatAction.LOAD_CHANNEL_MESSAGES_SUCCESS,
  payload: messages,
})

export const loadChannelMessagesFailure = (errorMessage) => ({
  type: chatAction.LOAD_CHANNEL_MESSAGES_FAILURE,
  payload: errorMessage,
})

export const addChannelMessageToChat = (message) => ({
  type: chatAction.ADD_CHANNEL_MESSAGE_TO_CHAT,
  payload: message,
})
