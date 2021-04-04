import AwaitLock from "await-lock"
import { createSignalRConnection } from "middleware/signalr/signalR"

import {
  channelAction,
  loadAllChannelsSuccess,
  loadAllChannelsFailure,
  loadSubscribedChannelsSuccess,
  loadSubscribedChannelsFailure,
  createChannelSuccess,
  createChannelFailure,
  updateChannelSuccess,
  updateChannelFailure,
  subscribeToChannelSuccess,
  subscribeToChannelFailure,
  unsubscribeFromChannelSuccess,
  unsubscribeFromChannelFailure,
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
let lock = new AwaitLock()

async function getHubConnection(store) {
  if (!hubConnection) {
    await lock.acquireAsync()
    try {
      if (!hubConnection) {
        await establishSignalRConnection(store)
      }
    } finally {
      lock.release()
    }
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

  hubConnection.on("SubscriberAddedToChannel", (channel) => {
    dispatch(subscribeToChannelSuccess(channel))
  })

  hubConnection.on("SubscriberRemovedFromChannel", (channel) => {
    dispatch(unsubscribeFromChannelSuccess(channel))
  })

  hubConnection.on("ChannelCreated", (channel) => {
    const {
      userLogin: {
        currentUser: { id: userId },
      },
    } = getState()

    dispatch(createChannelSuccess(channel))

    if (userId === channel.creatorId) {
      dispatch(subscribeToChannelSuccess(channel))
    }
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

    case channelAction.SUBSCRIBE_TO_CHANNEL_START:
      return await onSubscribeToChannel(action, store)

    case channelAction.UNSUBSCRIBE_FROM_CHANNEL_START:
      return await onUnsubscribeFromChannel(action, store)

    case channelAction.CREATE_CHANNEL_START:
      return await onCreateChannel(action, store)

    case channelAction.CREATE_CHANNEL_SUCCESS:
    case channelAction.SUBSCRIBE_TO_CHANNEL_SUCCESS:
      return await onAddConnectionToGroup(action, store)

    case channelAction.UNSUBSCRIBE_FROM_CHANNEL_SUCCESS:
      return await onRemoveConnectionFromGroup(action, store)

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
    const { payload: subscriberId } = action
    const hubConnection = await getHubConnection(store)
    await hubConnection.invoke("LoadSubscribedChannels", { subscriberId })
  } catch (error) {
    store.dispatch(loadSubscribedChannelsFailure(error.message))
  }
}

const onJoinSubscribedChannels = async (action, store) => {
  try {
    const { payload: channels } = action
    for (const channel of channels) {
      await onAddConnectionToGroup({ payload: channel }, store)
    }
  } catch (error) {
    console.log(error)
  }
}

const onSubscribeToChannel = async (action, store) => {
  try {
    const hubConnection = await getHubConnection(store)
    await hubConnection.invoke("AddSubscriberToChannel", action.payload)
  } catch (error) {
    store.dispatch(subscribeToChannelFailure(error.message))
  }
}
const onUnsubscribeFromChannel = async (action, store) => {
  try {
    const hubConnection = await getHubConnection(store)
    await hubConnection.invoke("RemoveSubscriberFromChannel", action.payload)
  } catch (error) {
    store.dispatch(unsubscribeFromChannelFailure(error.message))
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

const onAddConnectionToGroup = async (action, store) => {
  try {
    const { payload: channel } = action
    const hubConnection = await getHubConnection(store)
    await hubConnection.invoke("AddToGroup", channel.id)
  } catch (error) {
    console.log(action, error)
  }
}

const onRemoveConnectionFromGroup = async (action, store) => {
  try {
    const { payload: channel } = action
    const hubConnection = await getHubConnection(store)
    await hubConnection.invoke("RemoveFromGroup", channel.id)
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
