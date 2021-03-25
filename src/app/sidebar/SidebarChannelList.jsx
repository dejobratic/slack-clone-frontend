import React from "react"
import { useSelector } from "react-redux"

import SidebarChannel from "app/sidebar/SidebarChannel"

import { selectCurrentChannel } from "redux/channel/selectors"

const SidebarChannelList = ({ header, channels }) => {
  const currentChannel = useSelector(selectCurrentChannel)

  return (
    <>
      {header}
      {channels.map((channel) => (
        <SidebarChannel
          key={channel.id}
          {...channel}
          selected={currentChannel?.id === channel.id}
        />
      ))}
    </>
  )
}

export default SidebarChannelList
