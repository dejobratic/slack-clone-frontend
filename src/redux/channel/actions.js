export const channelAction = {
  ADD_CHANNEL_START: "ADD_CHANNEL_START",
  ADD_CHANNEL_SUCCESS: "ADD_CHANNEL_SUCCESS",
  ADD_CHANNEL_FAILURE: "ADD_CHANNEL_FAILURE",
}

export const addChannel = (channelName) => ({
  type: channelAction.ADD_CHANNEL_START,
  payload: channelName,
})

export const addChannelSuccess = (channel) => ({
  type: channelAction.ADD_CHANNEL_SUCCESS,
  payload: channel,
})

export const addChannelFailure = (errorMessage) => ({
  type: channelAction.ADD_CHANNEL_FAILURE,
  payload: errorMessage,
})
