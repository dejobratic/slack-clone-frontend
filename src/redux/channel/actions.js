export const channelAction = {
  GET_ALL_CHANNELS_START: "GET_ALL_CHANNELS_START",
  GET_ALL_CHANNELS_SUCCESS: "GET_ALL_CHANNELS_SUCCESS",
  GET_ALL_CHANNELS_FAILURE: "GET_ALL_CHANNELS_FAILURE",

  CREATE_CHANNEL_START: "CREATE_CHANNEL_START",
  CREATE_CHANNEL_SUCCESS: "CREATE_CHANNEL_SUCCESS",
  CREATE_CHANNEL_FAILURE: "CREATE_CHANNEL_FAILURE",

  ADD_CHANNEL: "ADD_CHANNEL",
  OPEN_CHANNEL: "OPEN_CHANNEL",
}

export const getAllChannels = () => ({
  type: channelAction.GET_ALL_CHANNELS_START,
})

export const getAllChannelsSuccess = (channels) => ({
  type: channelAction.GET_ALL_CHANNELS_SUCCESS,
  payload: channels,
})

export const getAllChannelsFailure = (errorMessage) => ({
  type: channelAction.GET_ALL_CHANNELS_FAILURE,
  payload: errorMessage,
})

export const createChannel = (channelName) => ({
  type: channelAction.CREATE_CHANNEL_START,
  payload: channelName,
})

export const createChannelSuccess = () => ({
  type: channelAction.CREATE_CHANNEL_SUCCESS,
})

export const createChannelFailure = (errorMessage) => ({
  type: channelAction.CREATE_CHANNEL_FAILURE,
  payload: errorMessage,
})

export const openChannel = (channel) => ({
  type: channelAction.OPEN_CHANNEL,
  payload: channel,
})

export const addChannel = (channel) => ({
  type: channelAction.ADD_CHANNEL,
  payload: channel,
})
