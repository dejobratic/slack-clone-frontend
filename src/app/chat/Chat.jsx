import React, { useRef, useEffect } from "react"
import styled from "styled-components"

import ChatHeader from "app/chat/ChatHeader"
import ChatMessageList from "app/chat/ChatMessageList"
import ChatInput from "app/chat/ChatInput"

const Chat = () => {
  const messages = [
    {
      text: "Hellloooooo!",
      user: {
        name: "Dejan Bratic",
        image:
          "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
      },
    },
  ]

  const chatRef = useRef(null)

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
`
