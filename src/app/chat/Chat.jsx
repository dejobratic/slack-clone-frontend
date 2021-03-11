import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"

import ChatHeader from "app/chat/ChatHeader"
import ChatMessageList from "app/chat/ChatMessageList"
import ChatInput from "app/chat/ChatInput"

import useSignalRConnection from "hooks/useSignalRConnection"

const Chat = () => {
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
  }, [])

  return (
    <ChatContainer>
      <>
        <ChatHeader channelName="ROOM" />
        <ChatMessageList chatRef={chatRef} messages={messages} />
        <ChatInput chatRef={chatRef} channelName="ROOM" />
      </>
    </ChatContainer>
  )
}

export default Chat

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 45px;
  margin-bottom: 100px;
`
