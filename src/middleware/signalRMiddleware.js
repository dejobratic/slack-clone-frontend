import { createSignalRConnection } from "middleware/signalR"

import {
  channelAction,
  openChannel,
  addChannel,
  createChannelSuccess,
  createChannelFailure,
} from "redux/channel/actions"

import {
  chatAction,
  addMessage,
  sendMessageSuccess,
  sendMessageFailure,
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
  hubConnection = await createSignalRConnection(hubUrl)

  hubConnection.on("ReceiveMessage", (message) => {
    const {
      channel: {
        current: { id: channelId },
      },
    } = getState()

    if (channelId === message.channelId) {
      dispatch(addMessage(message))
    }
  })

  hubConnection.on("CreateChannel", (channel) => {
    dispatch(addChannel(channel))
    dispatch(openChannel(channel))
  })
}

const signalRMiddleware = (store) => (next) => async (action) => {
  next(action)

  switch (action?.type) {
    case channelAction.GET_ALL_CHANNELS_SUCCESS:
      return await onGetAllChannels(action, store)

    case channelAction.CREATE_NEW_CHANNEL_START:
      return await onCreateChannel(action, store)

    case channelAction.ADD_CHANNEL_START:
      return await onAddChannel(action, store)

    case chatAction.SEND_MESSAGE_START:
      return await onSendMessage(action, store)

    default:
      break
  }
}

const onGetAllChannels = async (action, store) => {
  try {
    const { payload: channels } = action

    const hubConnection = await getHubConnection(store)
    for (let i = 0; i < channels.length; i++) {
      await hubConnection.invoke("JoinMessageGroup", channels[i].id)
    }
  } catch (error) {
    console.log(error)
  }
}

const onSendMessage = async (action, store) => {
  try {
    const { channelId } = action.payload

    const hubConnection = await getHubConnection(store)
    await hubConnection.invoke("SendMessageToGroup", channelId, action.payload)

    store.dispatch(sendMessageSuccess())
  } catch (error) {
    store.dispatch(sendMessageFailure(error.message))
  }
}

const onCreateChannel = async (action, store) => {
  try {
    const hubConnection = await getHubConnection(store)
    await hubConnection.invoke("CreateChannel", action.payload)

    store.dispatch(createChannelSuccess())
  } catch (error) {
    store.dispatch(createChannelFailure(error.message))
  }
}

const onAddChannel = async (action, store) => {
  try {
    const hubConnection = await getHubConnection(store)
  } catch (error) {}
}

export default signalRMiddleware
