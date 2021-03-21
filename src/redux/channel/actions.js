export const channelAction = {
  GET_ALL_CHANNELS_START: "GET_ALL_CHANNELS_START",
  GET_ALL_CHANNELS_SUCCESS: "GET_ALL_CHANNELS_SUCCESS",
  GET_ALL_CHANNELS_FAILURE: "GET_ALL_CHANNELS_FAILURE",

  CREATE_NEW_CHANNEL_START: "CREATE_NEW_CHANNEL_START",
  CREATE_NEW_CHANNEL_SUCCESS: "CREATE_NEW_CHANNEL_SUCCESS",
  CREATE_NEW_CHANNEL_FAILURE: "CREATE_NEW_CHANNEL_FAILURE",

  ADD_CHANNEL_START: "ADD_CHANNEL_START",
  ADD_CHANNEL_SUCCESS: "ADD_CHANNEL_SUCCESS",
  ADD_CHANNEL_FAILURE: "ADD_CHANNEL_FAILURE",

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

export const createChannel = (channel) => ({
  type: channelAction.CREATE_NEW_CHANNEL_START,
  payload: channel,
})

export const createChannelSuccess = () => ({
  type: channelAction.CREATE_NEW_CHANNEL_SUCCESS,
})

export const createChannelFailure = (errorMessage) => ({
  type: channelAction.CREATE_NEW_CHANNEL_FAILURE,
  payload: errorMessage,
})

export const addChannel = (channel) => ({
  type: channelAction.ADD_CHANNEL_START,
  payload: channel,
})

export const addChannelSuccess = (channel) => ({
  type: channelAction.ADD_CHANNEL_SUCCESS,
  payload: channel,
})

export const addChannelFailure = (errorMessage) => ({
  type: channelAction.ADD_CHANNEL_FAILURE,
  payload: errorMessage,
})

export const openChannel = (channel) => ({
  type: channelAction.OPEN_CHANNEL,
  payload: channel,
})
