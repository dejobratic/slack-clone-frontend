export const channelAction = {
  LOAD_ALL_CHANNELS_START: "LOAD_ALL_CHANNELS_START",
  LOAD_ALL_CHANNELS_SUCCESS: "LOAD_ALL_CHANNELS_SUCCESS",
  LOAD_ALL_CHANNELS_FAILURE: "LOAD_ALL_CHANNELS_FAILURE",

  LOAD_SUBSCRIBED_CHANNELS_START: "LOAD_SUBSCRIBED_CHANNELS_START",
  LOAD_SUBSCRIBED_CHANNELS_SUCCESS: "LOAD_SUBSCRIBED_CHANNELS_SUCCESS",
  LOAD_SUBSCRIBED_CHANNELS_FAILURE: "LOAD_SUBSCRIBED_CHANNELS_FAILURE",

  CREATE_CHANNEL_START: "CREATE_CHANNEL_START",
  CREATE_CHANNEL_SUCCESS: "CREATE_CHANNEL_SUCCESS",
  CREATE_CHANNEL_FAILURE: "CREATE_CHANNEL_FAILURE",

  UPDATE_CHANNEL_START: "UPDATE_CHANNEL_START",
  UPDATE_CHANNEL_SUCCESS: "UPDATE_CHANNEL_SUCCESS",
  UPDATE_CHANNEL_FAILURE: "UPDATE_CHANNEL_FAILURE",

  OPEN_CHANNEL: "OPEN_CHANNEL",

  SUBSCRIBE_TO_CHANNEL_START: "SUBSCRIBE_TO_CHANNEL_START",
  SUBSCRIBE_TO_CHANNEL_SUCCESS: "SUBSCRIBE_TO_CHANNEL_SUCCESS",
  SUBSCRIBE_TO_CHANNEL_FAILURE: "SUBSCRIBE_TO_CHANNEL_FAILURE",

  UNSUBSCRIBE_FROM_CHANNEL_START: "UNSUBSCRIBE_FROM_CHANNEL_START",
  UNSUBSCRIBE_FROM_CHANNEL_SUCCESS: "UNSUBSCRIBE_FROM_CHANNEL_SUCCESS",
  UNSUBSCRIBE_FROM_CHANNEL_FAILURE: "UNSUBSCRIBE_FROM_CHANNEL_FAILURE",
}

export const loadAllChannels = () => ({
  type: channelAction.LOAD_ALL_CHANNELS_START,
  payload: {},
})

export const loadAllChannelsSuccess = (channels) => ({
  type: channelAction.LOAD_ALL_CHANNELS_SUCCESS,
  payload: channels,
})

export const loadAllChannelsFailure = (errorMessage) => ({
  type: channelAction.LOAD_ALL_CHANNELS_FAILURE,
  payload: errorMessage,
})

export const loadSubscribedChannels = (subscriberId) => ({
  type: channelAction.LOAD_SUBSCRIBED_CHANNELS_START,
  payload: subscriberId,
})

export const loadSubscribedChannelsSuccess = (channels) => ({
  type: channelAction.LOAD_SUBSCRIBED_CHANNELS_SUCCESS,
  payload: channels,
})

export const loadSubscribedChannelsFailure = (errorMessage) => ({
  type: channelAction.LOAD_SUBSCRIBED_CHANNELS_FAILURE,
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

export const subscribeToChannel = (channelIdAndSubscriberId) => ({
  type: channelAction.SUBSCRIBE_TO_CHANNEL_START,
  payload: channelIdAndSubscriberId,
})

export const subscribeToChannelSuccess = (channel) => ({
  type: channelAction.SUBSCRIBE_TO_CHANNEL_SUCCESS,
  payload: channel,
})

export const subscribeToChannelFailure = (errorMessage) => ({
  type: channelAction.SUBSCRIBE_TO_CHANNEL_FAILURE,
  payload: errorMessage,
})

export const unsubscribeFromChannel = (channelIdAndSubscriberId) => ({
  type: channelAction.UNSUBSCRIBE_FROM_CHANNEL_START,
  payload: channelIdAndSubscriberId,
})

export const unsubscribeFromChannelSuccess = (channel) => ({
  type: channelAction.UNSUBSCRIBE_FROM_CHANNEL_SUCCESS,
  payload: channel,
})

export const unsubscribeFromChannelFailure = (errorMessage) => ({
  type: channelAction.UNSUBSCRIBE_FROM_CHANNEL_FAILURE,
  payload: errorMessage,
})
