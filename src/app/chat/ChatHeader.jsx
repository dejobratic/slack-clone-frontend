import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"

import { updateChannel } from "redux/channel/actions"
import UpdateDescriptionModal from "./UpdateChannelDescriptionModal"

const ChatHeader = ({ channel }) => {
  const dispatch = useDispatch()
  const { name, description } = channel

  const [showModal, setShowModal] = useState(false)

  const toggleShowModal = () => setShowModal(!showModal)

  const handleUpdateDescription = (description) => {
    if (description) {
      dispatch(updateChannel({ ...channel, description }))
      toggleShowModal()
    }
  }

  return (
    <>
      <ChatHeaderContainer>
        <ChatHeaderLeft>
          <ChannelNameContainer>
            <h4>
              <strong>#{name}</strong>
            </h4>
            <StarBorderOutlinedIcon />
          </ChannelNameContainer>
          <ChannelDescriptionContainer>
            <p onClick={toggleShowModal}>
              <span>{description ?? "Add a description"}</span>
            </p>
          </ChannelDescriptionContainer>
        </ChatHeaderLeft>
        <ChatHeaderRight>
          <InfoOutlinedIcon />
        </ChatHeaderRight>
      </ChatHeaderContainer>

      <UpdateDescriptionModal
        shown={showModal}
        onClose={toggleShowModal}
        onSubmit={handleUpdateDescription}
      />
    </>
  )
}

export default ChatHeader

const ChatHeaderContainer = styled.div`
  grid-row: 1;
  grid-column: 2;

  display: grid;
  grid-template-columns: 1fr 1fr;

  padding: 15px;
  margin-top: 40px;
  border-bottom: 1px solid lightgray;
`

const ChatHeaderLeft = styled.div`
  grid-row: 1;
  grid-column: 1;
`

const ChannelNameContainer = styled.div`
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

const ChannelDescriptionContainer = styled.div`
  color: var(--text-color-darker);

  > p > span {
    cursor: pointer;
  }

  > p > span:hover {
    text-decoration: underline;
  }
`

const ChatHeaderRight = styled.div`
  grid-row: 1;
  grid-column: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
