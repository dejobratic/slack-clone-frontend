import React from "react"
import styled from "styled-components"

const ChatMessage = ({ text, timestamp, user }) => {
  return (
    <ChatMessageContainer>
      <img src={user.image} alt={user.name} />
      <ChatMessageBody>
        <h4>
          {user.name} <span>{new Date().toUTCString()}</span>
        </h4>
        <p>{text}</p>
      </ChatMessageBody>
    </ChatMessageContainer>
  )
}

export default ChatMessage

const ChatMessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`

const ChatMessageBody = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`
