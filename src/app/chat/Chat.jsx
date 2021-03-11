import React, { useState, useRef } from "react"
import styled from "styled-components"

import ChatHeader from "app/chat/ChatHeader"
import ChatMessageList from "app/chat/ChatMessageList"
import ChatInput from "app/chat/ChatInput"

import useSignalRConnection from "app/hooks/useSignalRConnection"

const Chat = () => {
  const [messages, setMessages] = useState([])

  const chatRef = useRef(null)
  chatRef.current = messages

  useSignalRConnection("http://localhost:49883/hubs/chat", (connection) => {
    connection.on("ReceiveMessage", (message) => {
      setMessages([...chatRef.current, message])
      console.log(messages)
    })
  })

  // useEffect(() => {
  //   chatRef?.current?.scrollIntoView({
  //     behavior: "smooth",
  //   })
  // }, [])

  return (
    <ChatContainer>
      <>
        <ChatHeader channelName="ROOM" />
        <ChatMessageList chatRef={chatRef} messages={messages} />
        <ChatInput channelName="ROOM" />
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
