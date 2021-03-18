import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import { Button } from "@material-ui/core"

import { sendMessage } from "redux/chat/actions"

const ChatInput = ({ channelId, channelName }) => {
  const dispatch = useDispatch()
  const [text, setText] = useState("")

  const handleSendMessage = (e) => {
    e.preventDefault()

    if (text) {
      dispatch(sendMessage({ text, channelId }))
      setText("")
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
        <Button hidden type="submit" onClick={handleSendMessage}>
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
    bottom: 20px;
    width: 60%;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`
