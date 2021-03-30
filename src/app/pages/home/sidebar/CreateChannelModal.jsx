import React, { useState } from "react"

import Modal from "app/components/modal/Modal"
import TextInput from "app/components/text-input/TextInput"
import Button from "app/components/button/Button"

const CreateChannelModal = ({ shown, onClose, onSubmit }) => {
  const [name, setName] = useState()
  const [description, setDescription] = useState()

  const handleOnSubmit = () => {
    onSubmit({ name, description })
    handleOnClose()
  }

  const handleOnClose = () => {
    onClose()
    resetInput()
  }

  const resetInput = () => {
    setName("")
    setDescription("")
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
        <Button onClick={handleOnSubmit} variant="primary">
          Create
        </Button>
      }
    />
  )
}

export default CreateChannelModal
