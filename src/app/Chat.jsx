import React, { useState, useEffect, useRef } from "react"
import * as signalR from "@microsoft/signalr"

import ChatWindow from "app/ChatWindow"
import ChatInput from "app/ChatInput"

const Chat = () => {
  const [chat, setChat] = useState([])
  const latestChat = useRef(null)

  latestChat.current = chat

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:5001/hubs/chat")
      .withAutomaticReconnect()
      .build()

    connection
      .start()
      .then((result) => {
        console.log("Connected!")

        connection.on("ReceiveMessage", (message) => {
          const updatedChat = [...latestChat.current]
          updatedChat.push(message)

          setChat(updatedChat)
        })
      })
      .catch((e) => console.log("Connection failed: ", e))
  }, [])

  const sendMessage = async (user, message) => {
    const chatMessage = {
      user: user,
      message: message,
    }

    try {
      await fetch("https://localhost:44387/chat/messages", {
        method: "POST",
        body: JSON.stringify(chatMessage),
        headers: {
          "Content-Type": "application/json",
        },
      })
    } catch (e) {
      console.log("Sending message failed.", e)
    }
  }

  return (
    <div>
      <ChatInput sendMessage={sendMessage} />
      <hr />
      <ChatWindow chat={chat} />
    </div>
  )
}

export default Chat