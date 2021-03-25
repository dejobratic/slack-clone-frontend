import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled, { css } from "styled-components"

import AddIcon from "@material-ui/icons/Add"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import SidebarHeader from "app/sidebar/SidebarHeader"
import SidebarMenu from "app/sidebar/SidebarMenu"
import SidebarChannelList from "app/sidebar/SidebarChannelList"
import SidebarItem from "app/sidebar/SidebarItem"

import { getSubscribedChannels, createChannel } from "redux/channel/actions"
import { selectAllChannels } from "redux/channel/selectors"

const Sidebar = () => {
  const dispatch = useDispatch()
  const channels = useSelector(selectAllChannels)

  useEffect(() => {
    dispatch(getSubscribedChannels())
  }, [dispatch])

  const handleCreateChannel = () => {
    const channelName = prompt("Please enter the channel name.")
    if (channelName) {
      dispatch(createChannel({ name: channelName }))
    }
  }

  const [collapsed, setCollapsed] = useState(false)

  return (
    <SidebarContainer>
      <SidebarHeader workspace="Slack HQ" user="Dejan Bratic" />
      <SidebarMenu />
      <SidebarChannelList
        header={
          <SidebarItem
            LeftIcon={
              <ChannelHeaderIcon
                collapsed={collapsed}
                onClick={() => setCollapsed(!collapsed)}
              />
            }
            title="Channels"
            RightIcon={<AddIcon onClick={handleCreateChannel} />}
          />
        }
        channels={channels}
        collapsed={collapsed}
      />
    </SidebarContainer>
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
