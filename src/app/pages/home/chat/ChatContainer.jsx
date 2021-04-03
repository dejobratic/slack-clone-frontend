import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Chat from "app/pages/home/chat/Chat"

import { loadChannelMessages } from "redux/chat/actions"
import { selectChat } from "redux/chat/selectors"
import { selectCurrentChannel } from "redux/channel/selectors"
import { selectCurrentUser } from "redux/user-login/selectors"

const ChatContainer = () => {
  const dispatch = useDispatch()

  const { id: userId } = useSelector(selectCurrentUser)
  const channel = useSelector(selectCurrentChannel)
  const { messages, loading } = useSelector(selectChat)

  useEffect(() => {
    if (channel)
      dispatch(
        loadChannelMessages({
          channelId: channel.id,
          pageNumber: 1,
          pageSize: 10,
        })
      )
  }, [channel, dispatch])

  if (!channel || loading) return <></>

  return <Chat userId={userId} channel={channel} messages={messages} />
}

export default ChatContainer
