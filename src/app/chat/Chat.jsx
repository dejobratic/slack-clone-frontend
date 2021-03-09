import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import * as signalR from "@microsoft/signalr"

import ChatHeader from "app/chat/ChatHeader"
import ChatMessageList from "app/chat/ChatMessageList"
import ChatInput from "app/chat/ChatInput"

const Chat = () => {
  const [messages, setMessages] = useState([])

  const chatRef = useRef(null)
  chatRef.current = messages

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:49883/hubs/chat")
      .withAutomaticReconnect()
      .build()

    connection
      .start()
      .then((result) => {
        console.log("Connected!")

        connection.on("ReceiveMessage", (message) => {
          setMessages([...chatRef.current, message])
          console.log(messages)
        })
      })
      .catch((e) => console.log("Connection failed: ", e))
  }, [])

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
