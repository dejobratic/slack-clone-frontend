import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

import ChannelBrowserHeader from "app/pages/home/channel-browser/ChannelBrowserHeader"
import Channel from "app/pages/home/channel-browser/Channel"

import { selectAllChannels } from "redux/channel/selectors"

const ChannelBrowser = () => {
  const channels = useSelector(selectAllChannels)

  return (
    <>
      <ChannelBrowserHeader />
      <ChannelBrowserContainer>
        {channels.map((channel) => (
          <Channel key={channel.id} {...channel} />
        ))}
      </ChannelBrowserContainer>
    </>
  )
}

export default ChannelBrowser

const ChannelBrowserContainer = styled.div`
  grid-column: 2;
  grid-row: 2;
`
