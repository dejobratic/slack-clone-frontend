import React, { useState } from "react"
import styled from "styled-components"

import { Button } from "@material-ui/core"

const ChatInput = ({ chatRef, channelId, channelName }) => {
  const [text, setText] = useState("")

  const sendChatMessage = (e) => {
    e.preventDefault()

    if (!text) return false

    setText("")

    // TODO: refactor
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <ChatInputContainer>
      <form>
        <input
          value={text}
          placeholder={`Message #${channelName}`}
          onChange={(e) => setText(e.target.value)}
        />
        <Button hidden type="submit" onClick={sendChatMessage}>
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
