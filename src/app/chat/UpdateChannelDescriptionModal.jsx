import React, { useState } from "react"
import { useSelector } from "react-redux"

import Modal from "app/components/modal/Modal"
import TextInput from "app/components/text-input/TextInput"
import Button from "app/components/button/Button"

import { selectCurrentChannel } from "redux/channel/selectors"

const UpdateChannelDescriptionModal = ({ shown, onClose, onSubmit }) => {
  const channel = useSelector(selectCurrentChannel)
  const [description, setDescription] = useState(channel.description)

  const handleOnSubmit = () => {
    onSubmit(description)
    setDescription("")
  }

  return (
    <Modal
      shown={shown}
      title="Edit channel description"
      onClose={onClose}
      content={
        <TextInput
          rows={5}
          type="textarea"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      }
      actions={
        <>
          <Button onClick={onClose} variant="basic">
            Cancel
          </Button>
          <Button onClick={handleOnSubmit} variant="primary">
            Set Topic
          </Button>
        </>
      }
    />
  )
}

export default UpdateChannelDescriptionModal
