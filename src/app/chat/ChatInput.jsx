import React, { useState } from "react"
import styled from "styled-components"

import { Button } from "@material-ui/core"

const ChatInput = ({ channelId, channelName }) => {
  const [text, setText] = useState("")

  const addMessage = (e) => {
    e.preventDefault()

    if (text) {
      sendMessage(text)
      setText("")
    }
  }

  const sendMessage = async (text) => {
    try {
      await fetch("https://localhost:44387/chat/messages", {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    } catch (e) {
      console.log("Sending message failed.", e)
    }
  }

  return (
    <ChatInputContainer>
      <form>
        <input
          value={text}
          placeholder={`Message #${channelName}`}
          onChange={(e) => setText(e.target.value)}
        />
        <Button hidden type="submit" onClick={addMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`
