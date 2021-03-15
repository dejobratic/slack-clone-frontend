export const channelAction = {
  ADD_CHANNEL_START: "ADD_CHANNEL_START",
  ADD_CHANNEL_SUCCESS: "ADD_CHANNEL_SUCCESS",
  ADD_CHANNEL_FAILURE: "ADD_CHANNEL_FAILURE",

  OPEN_CHANNEL: "OPEN_CHANNEL",
}

export const addChannel = (channelName) => ({
  type: channelAction.ADD_CHANNEL_START,
  payload: channelName,
})

export const addChannelSuccess = () => ({
  type: channelAction.ADD_CHANNEL_SUCCESS,
})

export const addChannelFailure = (errorMessage) => ({
  type: channelAction.ADD_CHANNEL_FAILURE,
  payload: errorMessage,
})

export const openChannel = (channel) => ({
  type: channelAction.OPEN_CHANNEL,
  payload: channel,
})
