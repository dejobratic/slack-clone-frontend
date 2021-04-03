import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

import Button from "app/components/button/Button"
import CreateChannelModal from "app/pages/home/components/create-channel-modal/CreateChannelModal"

import { createChannel } from "redux/channel/actions"
import { selectCurrentUser } from "redux/user-login/selectors"

const ChannelBrowserHeader = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)

  const [showModal, setShowModal] = useState(false)

  const toggleShowModal = () => setShowModal(!showModal)

  const handleCreateChannel = (channel) => {
    if (channel?.name) {
      dispatch(createChannel({ ...channel, creatorId: currentUser.Id }))
    }
  }

  return (
    <>
      <ChannelBrowserHeaderContainer>
        <ChannelBrowserTitle>
          <strong>Channel Browser</strong>
        </ChannelBrowserTitle>
        <ChannelBrowserHeaderRight>
          <Button onClick={toggleShowModal}>Create</Button>
        </ChannelBrowserHeaderRight>
      </ChannelBrowserHeaderContainer>

      <CreateChannelModal
        shown={showModal}
        onClose={toggleShowModal}
        onSubmit={handleCreateChannel}
      />
    </>
  )
}

export default ChannelBrowserHeader

const ChannelBrowserHeaderContainer = styled.div`
  grid-row: 1;
  grid-column: 2;

  display: grid;
  grid-template-columns: 1fr 1fr;

  padding: 15px;
  margin-top: 50px;
  border-bottom: 1px solid lightgray;
`

const ChannelBrowserTitle = styled.h4`
  grid-column: 1;

  align-self: center;
`

const ChannelBrowserHeaderRight = styled.div`
  grid-column: 2;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`
