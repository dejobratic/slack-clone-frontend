import React from "react"
import styled from "styled-components"

import ChatMessage from "app/chat/ChatMessage"

const ChatMessageList = ({ chatRef, messages = [] }) => {
  return (
    <ChatMessageListContainer>
      {messages.map((message) => (
        <ChatMessage key={message.id} {...message} />
      ))}
      <ChatBottom ref={chatRef} />
    </ChatMessageListContainer>
  )
}

export default ChatMessageList

const ChatMessageListContainer = styled.div``

const ChatBottom = styled.div`
  padding-bottom: 80px;
`
