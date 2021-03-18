import React, { useEffect, useRef } from "react"
import styled from "styled-components"

import ChatHeader from "app/chat/ChatHeader"
import ChatMessage from "app/chat/ChatMessage"
import ChatInput from "app/chat/ChatInput"

const Chat = ({ channel, messages }) => {
  const chatRef = useRef(null)

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    })
  }, [messages])

  return (
    <ChatContainer>
      <ChatHeader channelName={channel.name} />
      <ChatMessageListContainer>
        {messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
        <ChatBottom ref={chatRef} />
      </ChatMessageListContainer>
      <ChatInput channelId={channel.id} channelName={channel.name} />
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
const ChatMessageListContainer = styled.div``

const ChatBottom = styled.div`
  padding-bottom: 80px;
`
