import React, { useEffect, useRef } from "react"
import styled from "styled-components"

import ChatDetails from "app/pages/home/chat/ChatDetails"
import ChatMessage from "app/pages/home/chat/ChatMessage"
import ChatInput from "app/pages/home/chat/ChatInput"

const Chat = ({ userId, channel, messages }) => {
  const chatRef = useRef(null)

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    })
  }, [messages])

  return (
    <>
      <ChatDetails channel={channel} />
      <ChatMessageList>
        {messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
        <ChatBottom ref={chatRef} />
      </ChatMessageList>
      <ChatInput
        userId={userId}
        channelId={channel.id}
        channelName={channel.name}
      />
    </>
  )
}

export default Chat

const ChatMessageList = styled.div`
  grid-column: 2;
  grid-row: 2;

  padding: 0 1em;
  overflow-y: scroll;

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #ebebeb;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #6d6d6d;
  }
`

const ChatBottom = styled.div``
