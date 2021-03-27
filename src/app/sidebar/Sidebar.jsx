import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled, { css } from "styled-components"

import AddIcon from "@material-ui/icons/Add"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import SidebarHeader from "app/sidebar/SidebarHeader"
import SidebarMenu from "app/sidebar/SidebarMenu"
import SidebarChannelList from "app/sidebar/SidebarChannelList"
import SidebarItem from "app/sidebar/SidebarItem"
import CreateChannelModal from "app/sidebar/CreateChannelModal"

import { getSubscribedChannels, createChannel } from "redux/channel/actions"
import { selectAllChannels } from "redux/channel/selectors"

const Sidebar = () => {
  const dispatch = useDispatch()
  const channels = useSelector(selectAllChannels)

  const [showModal, setShowModal] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleShowModal = () => setShowModal(!showModal)
  const toggleSidebarCollapsed = () => setSidebarCollapsed(!sidebarCollapsed)

  useEffect(() => {
    dispatch(getSubscribedChannels())
  }, [dispatch])

  const handleCreateChannel = (channel) => {
    if (channel?.name && channel?.description) {
      dispatch(createChannel(channel))
    }
  }

  return (
    <>
      <SidebarContainer>
        <SidebarHeader workspace="Slack HQ" user="Dejan Bratic" />
        <SidebarMenu />
        <SidebarChannelList
          header={
            <SidebarItem
              LeftIcon={
                <ChannelHeaderIcon
                  collapsed={sidebarCollapsed}
                  onClick={toggleSidebarCollapsed}
                />
              }
              title="Channels"
              RightIcon={<AddIcon onClick={toggleShowModal} />}
            />
          }
          channels={channels}
          collapsed={sidebarCollapsed}
        />
      </SidebarContainer>

      <CreateChannelModal
        shown={showModal}
        onClose={toggleShowModal}
        onSubmit={handleCreateChannel}
      />
    </>
  )
}

export default Sidebar

const ChannelHeaderIcon = styled(ExpandMoreIcon)`
  transition: transform 0.5s !important;
  ${({ collapsed }) => (collapsed ? transform : css``)}
`

const transform = css`
  transform: rotate(-90deg);
`

const SidebarContainer = styled.div`
  grid-column: 1;
  grid-row: 1 / 4;
  color: var(--text-color);
  background-color: var(--slack-color);
  border-top: 1px solid var(--slack-color-lighter);
  max-width: 260px;
  margin-top: 46px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid var(--slack-color-lighter);
  }
`
