import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Chat from "app/chat/Chat"

import { getChannelMessages } from "redux/chat/actions"
import { selectChat } from "redux/chat/selectors"
import { selectCurrentChannel } from "redux/channel/selectors"

const ChatContainer = () => {
  const dispatch = useDispatch()

  const { messages, loading } = useSelector(selectChat)
  const channel = useSelector(selectCurrentChannel)

  useEffect(() => {
    if (channel)
      dispatch(
        getChannelMessages({
          channelId: channel.id,
          pageNumber: 1,
          pageSize: 10,
        })
      )
  }, [channel, dispatch])

  if (!channel || loading) return <></>

  return <Chat channel={channel} messages={messages} />
}

export default ChatContainer
