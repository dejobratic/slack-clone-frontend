import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import Modal from "app/components/modal/Modal"
import TextInput from "app/components/text-input/TextInput"
import Button from "app/components/button/Button"

import { createChannel } from "redux/channel/actions"
import { selectCurrentUser } from "redux/user-login/selectors"

const CreateChannelModal = ({ shown, onClose }) => {
  const dispatch = useDispatch()
  const { id: creatorId } = useSelector(selectCurrentUser)

  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)

  const handleCreateChannel = () => {
    if (name) {
      dispatch(createChannel({ name, description, creatorId }))
      handleOnClose()
    }
  }

  const handleOnClose = () => {
    onClose()
    resetInput()
  }

  const resetInput = () => {
    setName(null)
    setDescription(null)
  }

  return (
    <Modal
      shown={shown}
      title="Create new channel"
      onClose={handleOnClose}
      content={
        <>
          <TextInput
            rows={1}
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          <TextInput
            rows={1}
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </>
      }
      actions={
        <Button onClick={handleCreateChannel} variant="primary">
          Create
        </Button>
      }
    />
  )
}

export default CreateChannelModal
