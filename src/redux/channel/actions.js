export const channelAction = {
  GET_SUBSCRIBED_CHANNELS_START: "GET_SUBSCRIBED_CHANNELS_START",
  GET_SUBSCRIBED_CHANNELS_SUCCESS: "GET_SUBSCRIBED_CHANNELS_SUCCESS",
  GET_SUBSCRIBED_CHANNELS_FAILURE: "GET_SUBSCRIBED_CHANNELS_FAILURE",

  CREATE_CHANNEL_START: "CREATE_CHANNEL_START",
  CREATE_CHANNEL_SUCCESS: "CREATE_CHANNEL_SUCCESS",
  CREATE_CHANNEL_FAILURE: "CREATE_CHANNEL_FAILURE",

  UPDATE_CHANNEL_START: "UPDATE_CHANNEL_START",
  UPDATE_CHANNEL_SUCCESS: "UPDATE_CHANNEL_SUCCESS",
  UPDATE_CHANNEL_FAILURE: "UPDATE_CHANNEL_FAILURE",

  OPEN_CHANNEL: "OPEN_CHANNEL",
}

export const getSubscribedChannels = () => ({
  type: channelAction.GET_SUBSCRIBED_CHANNELS_START,
  payload: {},
})

export const getSubscribedChannelsSuccess = (channels) => ({
  type: channelAction.GET_SUBSCRIBED_CHANNELS_SUCCESS,
  payload: channels,
})

export const getSubscribedChannelsFailure = (errorMessage) => ({
  type: channelAction.GET_SUBSCRIBED_CHANNELS_FAILURE,
  payload: errorMessage,
})

export const createChannel = (channel) => ({
  type: channelAction.CREATE_CHANNEL_START,
  payload: channel,
})

export const createChannelSuccess = (channel) => ({
  type: channelAction.CREATE_CHANNEL_SUCCESS,
  payload: channel,
})

export const createChannelFailure = (errorMessage) => ({
  type: channelAction.CREATE_CHANNEL_FAILURE,
  payload: errorMessage,
})

export const updateChannel = (channel) => ({
  type: channelAction.UPDATE_CHANNEL_START,
  payload: channel,
})

export const updateChannelSuccess = (channel) => ({
  type: channelAction.UPDATE_CHANNEL_SUCCESS,
  payload: channel,
})

export const updateChannelFailure = (errorMessage) => ({
  type: channelAction.UPDATE_CHANNEL_FAILURE,
  payload: errorMessage,
})

export const openChannel = (channelId) => ({
  type: channelAction.OPEN_CHANNEL,
  payload: channelId,
})
