import { createSignalRConnection } from "middleware/signalr/signalR"

import {
  channelAction,
  createChannelSuccess,
  createChannelFailure,
  loadAllChannelsSuccess,
  loadAllChannelsFailure,
  loadSubscribedChannelsSuccess,
  loadSubscribedChannelsFailure,
  updateChannelSuccess,
  updateChannelFailure,
} from "redux/channel/actions"

import {
  chatAction,
  addChannelMessageToChat,
  sendChannelMessageSuccess,
  sendChannelMessageFailure,
  loadChannelMessagesSuccess,
  loadChannelMessagesFailure,
} from "redux/chat/actions"

let hubConnection
let semaphore = false

const getHubConnection = async (store) => {
  if (!hubConnection && !semaphore) {
    semaphore = true
    await establishSignalRConnection(store)
  }

  return hubConnection
}

export const establishSignalRConnection = async ({ dispatch, getState }) => {
  const hubUrl = process.env.REACT_APP_CHAT_HUB_URL
  const {
    userLogin: {
      currentUser: { token },
    },
  } = getState()
  hubConnection = await createSignalRConnection(hubUrl, token.value)

  hubConnection.on("ChannelMessageReceived", (message) => {
    const {
      channel: {
        current: { id: channelId },
      },
    } = getState()

    if (channelId === message.channelId) {
      dispatch(addChannelMessageToChat(message))
    }
  })

  hubConnection.on("ChannelMessagesLoaded", (messages) => {
    dispatch(loadChannelMessagesSuccess(messages))
  })

  hubConnection.on("AllChannelsLoaded", (channels) => {
    dispatch(loadAllChannelsSuccess(channels))
  })

  hubConnection.on("SubscribedChannelsLoaded", (channels) => {
    dispatch(loadSubscribedChannelsSuccess(channels))
  })

  hubConnection.on("ChannelCreated", (channel) => {
    dispatch(createChannelSuccess(channel))
  })

  hubConnection.on("ChannelUpdated", (channel) => {
    dispatch(updateChannelSuccess(channel))
  })
}

const signalRMiddleware = (store) => (next) => async (action) => {
  next(action)

  switch (action?.type) {
    case channelAction.LOAD_ALL_CHANNELS_START:
      return await onLoadAllChannels(action, store)

    case channelAction.LOAD_SUBSCRIBED_CHANNELS_START:
      return await onLoadSubscribedChannels(action, store)

    case channelAction.LOAD_SUBSCRIBED_CHANNELS_SUCCESS:
      return await onJoinSubscribedChannels(action, store)

    case channelAction.CREATE_CHANNEL_START:
      return await onCreateChannel(action, store)

    case channelAction.CREATE_CHANNEL_SUCCESS:
      return await onJoinCreatedChannel(action, store)

    case channelAction.UPDATE_CHANNEL_START:
      return await onUpdateChannel(action, store)

    case chatAction.SEND_CHANNEL_MESSAGE_START:
      return await onSendChannelMessage(action, store)

    case chatAction.LOAD_CHANNEL_MESSAGES_START:
      return await onLoadChannelMessages(action, store)

    default:
      break
  }
}

const onLoadAllChannels = async (action, store) => {
  try {
    const hubConnection = await getHubConnection(store)
    await hubConnection.invoke("LoadAllChannels", action.payload)
  } catch (error) {
    store.dispatch(loadAllChannelsFailure(error.message))
  }
}

const onLoadSubscribedChannels = async (action, store) => {
  try {
    const hubConnection = await getHubConnection(store)
    await hubConnection.invoke("LoadSubscribedChannels", action.payload)
  } catch (error) {
    store.dispatch(loadSubscribedChannelsFailure(error.message))
  }
}

const onJoinSubscribedChannels = async (action, store) => {
  try {
    const { payload: channels } = action

    const hubConnection = await getHubConnection(store)
    for (const channel of channels)
      await hubConnection.invoke("JoinChannel", channel.id)
  } catch (error) {
    console.log(error)
  }
}

const onSendChannelMessage = async (action, store) => {
  try {
    const { channelId } = action.payload

    const hubConnection = await getHubConnection(store)
    await hubConnection.invoke("SendChannelMessage", channelId, action.payload)

    store.dispatch(sendChannelMessageSuccess())
  } catch (error) {
    store.dispatch(sendChannelMessageFailure(error.message))
  }
}

const onCreateChannel = async (action, store) => {
  try {
    const hubConnection = await getHubConnection(store)
    await hubConnection.invoke("CreateChannel", action.payload)
  } catch (error) {
    store.dispatch(createChannelFailure(error.message))
  }
}

const onJoinCreatedChannel = async (action, store) => {
  try {
    const { payload: channel } = action
    const hubConnection = await getHubConnection(store)
    await hubConnection.invoke("JoinChannel", channel.id)
  } catch (error) {
    console.log(error)
  }
}

const onUpdateChannel = async (action, store) => {
  try {
    const hubConnection = await getHubConnection(store)
    await hubConnection.invoke("UpdateChannel", action.payload)
  } catch (error) {
    store.dispatch(updateChannelFailure(error.message))
  }
}

const onLoadChannelMessages = async (action, store) => {
  try {
    const hubConnection = await getHubConnection(store)
    await hubConnection.invoke("LoadChannelMessages", action.payload)
  } catch (error) {
    store.dispatch(loadChannelMessagesFailure(error.message))
  }
}

export default signalRMiddleware
