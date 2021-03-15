import React, { useEffect, useState, useRef } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

import ChatHeader from "app/chat/ChatHeader"
import ChatMessageList from "app/chat/ChatMessageList"
import ChatInput from "app/chat/ChatInput"

import useSignalRConnection from "hooks/useSignalRConnection"

import { selectCurrentChannel } from "redux/channel/selectors"

const Chat = () => {
  const channel = useSelector(selectCurrentChannel)

  const chatRef = useRef(null)
  const [messages, setMessages] = useState([])

  useSignalRConnection(process.env.REACT_APP_CHAT_HUB_URL, (connection) => {
    connection.on("ReceiveMessage", (message) => {
      setMessages([...messages, message])
    })
  })

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    })
  }, [messages])

  return (
    <ChatContainer>
      {channel && (
        <>
          <ChatHeader channelName={channel.name} />
          <ChatMessageList chatRef={chatRef} messages={messages} />
          <ChatInput channelName={channel.name} />
        </>
      )}
    </ChatContainer>
  )
}

export default Chat

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 45px;
`
