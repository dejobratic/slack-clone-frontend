import { createSignalRConnection } from "middleware/signalR"

import {
  channelAction,
  createChannelSuccess,
  createChannelFailure,
  getSubscribedChannelsSuccess,
  getSubscribedChannelsFailure,
  updateChannelSuccess,
  updateChannelFailure,
} from "redux/channel/actions"

import {
  chatAction,
  addChannelMessageToChat,
  sendChannelMessageSuccess,
  sendChannelMessageFailure,
  getChannelMessagesSuccess,
  getChannelMessagesFailure,
} from "redux/chat/actions"

let hubConnection
let semaphore = false
const token = "token"

const getHubConnection = async (store) => {
  if (!hubConnection && !semaphore) {
    semaphore = true
    await establishSignalRConnection(store)
  }

  return hubConnection
}

export const establishSignalRConnection = async ({ dispatch, getState }) => {
  const hubUrl = process.env.REACT_APP_CHAT_HUB_URL
  hubConnection = await createSignalRConnection(hubUrl, token)

  hubConnection.on("ReceiveChannelMessage", (message) => {
    const {
      channel: {
        current: { id: channelId },
      },
    } = getState()

    if (channelId === message.channelId) {
      dispatch(addChannelMessageToChat(message))
    }
  })

  hubConnection.on("GetChannelMessages", (messages) => {
    dispatch(getChannelMessagesSuccess(messages))
  })

  hubConnection.on("GetSubscribedChannels", (channels) => {
    dispatch(getSubscribedChannelsSuccess(channels))
  })

  hubConnection.on("CreateChannel", (channel) => {
    dispatch(createChannelSuccess(channel))
  })

  hubConnection.on("UpdateChannel", (channel) => {
    dispatch(updateChannelSuccess(channel))
  })
}

const signalRMiddleware = (store) => (next) => async (action) => {
  next(action)

  switch (action?.type) {
    case channelAction.GET_SUBSCRIBED_CHANNELS_START:
      return await onGetSubscribedChannels(action, store)

    case channelAction.GET_SUBSCRIBED_CHANNELS_SUCCESS:
      return await onJoinSubscribedChannels(action, store)

    case channelAction.CREATE_CHANNEL_START:
      return await onCreateChannel(action, store)

    case channelAction.UPDATE_CHANNEL_START:
      return await onUpdateChannel(action, store)

    case chatAction.SEND_CHANNEL_MESSAGE_START:
      return await onSendChannelMessage(action, store)

    case chatAction.GET_CHANNEL_MESSAGES_START:
      return await onGetChannelMessages(action, store)

    default:
      break
  }
}

const onGetSubscribedChannels = async (action, store) => {
  try {
    const hubConnection = await getHubConnection(store)
    await hubConnection.invoke("GetSubscribedChannels", action.payload)
  } catch (error) {
    store.dispatch(getSubscribedChannelsFailure(error.message))
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
    await hubConnection.invoke(
      "SendMessageToChannel",
      channelId,
      action.payload
    )

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

const onUpdateChannel = async (action, store) => {
  try {
    const hubConnection = await getHubConnection(store)
    await hubConnection.invoke("UpdateChannel", action.payload)
  } catch (error) {
    store.dispatch(updateChannelFailure(error.message))
  }
}

const onGetChannelMessages = async (action, store) => {
  try {
    const hubConnection = await getHubConnection(store)
    await hubConnection.invoke("GetChannelMessages", action.payload)
  } catch (error) {
    store.dispatch(getChannelMessagesFailure(error.message))
  }
}

export default signalRMiddleware
