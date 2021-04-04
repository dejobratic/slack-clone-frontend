import React, { useState } from "react"
import styled from "styled-components"

import Button from "app/components/button/Button"
import CreateChannelModal from "app/pages/home/components/create-channel-modal/CreateChannelModal"

const ChannelBrowserHeader = () => {
  const [showModal, setShowModal] = useState(false)

  const toggleShowModal = () => setShowModal(!showModal)

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

      <CreateChannelModal shown={showModal} onClose={toggleShowModal} />
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
