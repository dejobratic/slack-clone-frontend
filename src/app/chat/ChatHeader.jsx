import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"

import Modal from "app/components/modal/Modal"
import TextInput from "app/components/text-input/TextInput"
import Button from "app/components/button/Button"
import { updateChannel } from "redux/channel/actions"

const ChatHeader = ({ channel }) => {
  const dispatch = useDispatch()
  const { name, description } = channel

  console.log(channel)

  const [edit, setEdit] = useState(false)
  const [newDescription, setNewDescription] = useState(description)

  const toggleEdit = () => setEdit(!edit)

  const handleUpdateDescription = (e) => {
    e.preventDefault()

    if (newDescription) {
      dispatch(updateChannel({ ...channel, description: newDescription }))
      toggleEdit()
      setNewDescription("")
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
            <p onClick={toggleEdit}>
              <span>{description ?? "Add a description"}</span>
            </p>
          </ChannelDescriptionContainer>
        </ChatHeaderLeft>
        <ChatHeaderRight>
          <InfoOutlinedIcon />
        </ChatHeaderRight>
      </ChatHeaderContainer>
      <Modal
        shown={edit}
        title="Edit channel description"
        onClose={toggleEdit}
        content={
          <TextInput
            rows={5}
            type="textarea"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        }
        actions={
          <>
            <Button onClick={toggleEdit} variant="basic">
              Cancel
            </Button>
            <Button onClick={handleUpdateDescription} variant="primary">
              Set Topic
            </Button>
          </>
        }
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

  > p > span :hover {
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
