import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import { Button } from "@material-ui/core"

import { sendChannelMessage } from "redux/chat/actions"

const ChatInput = ({ channelId, channelName, userId }) => {
  const dispatch = useDispatch()
  const [text, setText] = useState("")

  const handleSendMessage = (e) => {
    e.preventDefault()

    if (text) {
      dispatch(sendChannelMessage({ text, channelId, creatorId: userId }))
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
  grid-column: 2;
  grid-row: 3;
  padding-top: 5px;
  padding-bottom: 15px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    width: 90%;
    border-radius: 1px var(--slack-color);
    padding: 20px;
    outline: none;
  }

  > form > input::placeholder {
    color: var(--text-color-darker);
  }

  > form > button {
    display: none !important;
  }
`
