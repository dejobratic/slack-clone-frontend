import React from "react"
import styled from "styled-components"

import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"

const ChatHeader = ({ channelName }) => {
  return (
    <ChatHeaderContainer>
      <ChatHeaderLeft>
        <h4>
          <strong>#{channelName}</strong>
        </h4>
        <StarBorderOutlinedIcon />
      </ChatHeaderLeft>
      <ChatHeaderRight>
        <p>
          <InfoOutlinedIcon /> Details
        </p>
      </ChatHeaderRight>
    </ChatHeaderContainer>
  )
}

export default ChatHeader

const ChatHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`

const ChatHeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 20px;
    font-size: 18px;
  }
`

const ChatHeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5x !important;
    font-size: 16px;
  }
`
