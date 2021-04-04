import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled, { css } from "styled-components"

import AddIcon from "@material-ui/icons/Add"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import SidebarHeader from "app/pages/home/sidebar/Header"
import SidebarMenu from "app/pages/home/sidebar/Menu"
import SidebarChannelList from "app/pages/home/sidebar/ChannelList"
import SidebarItem from "app/pages/home/sidebar/SidebarItem"
import CreateChannelModal from "app/pages/home/components/create-channel-modal/CreateChannelModal"

import { loadSubscribedChannels } from "redux/channel/actions"
import { selectSubscribedChannels } from "redux/channel/selectors"
import { selectCurrentUser } from "redux/user-login/selectors"

const Sidebar = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const subscribedChannels = useSelector(selectSubscribedChannels)

  const [showModal, setShowModal] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleShowModal = () => setShowModal(!showModal)
  const toggleSidebarCollapsed = () => setSidebarCollapsed(!sidebarCollapsed)

  useEffect(() => {
    dispatch(loadSubscribedChannels(currentUser.id))
  }, [dispatch, currentUser])

  return (
    <>
      <SidebarContainer>
        <SidebarHeader
          workspace="Slack HQ"
          user={`${currentUser.firstName} ${currentUser.lastName}`}
        />
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
          channels={subscribedChannels}
          collapsed={sidebarCollapsed}
        />
      </SidebarContainer>

      <CreateChannelModal shown={showModal} onClose={toggleShowModal} />
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
