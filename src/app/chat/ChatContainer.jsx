import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Chat from "app/chat/Chat"

import useSignalRConnection from "hooks/useSignalRConnection"

import { getMessages, addMessage } from "redux/chat/actions"
import { selectChat } from "redux/chat/selectors"
import { selectCurrentChannel } from "redux/channel/selectors"

const ChatContainer = () => {
  const dispatch = useDispatch()

  const { messages, loading } = useSelector(selectChat)
  const channel = useSelector(selectCurrentChannel)

  useEffect(() => {
    if (channel)
      dispatch(
        getMessages({ channelId: channel.id, pageNumber: 1, pageSize: 10 })
      )
  }, [channel, dispatch])

  useSignalRConnection("ReceiveMessage", (message) => {
    dispatch(addMessage(message))
  })

  if (!channel) return <h1>Select a channel</h1>

  if (loading) return <h1>...</h1>

  return <Chat channel={channel} messages={messages} />
}

export default ChatContainer
