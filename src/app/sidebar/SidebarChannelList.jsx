import React from "react"
import { useSelector } from "react-redux"

import SidebarChannel from "app/sidebar/SidebarChannel"

import { selectCurrentChannel } from "redux/channel/selectors"

const SidebarChannelList = ({ header, channels, collapsed }) => {
  const currentChannel = useSelector(selectCurrentChannel)

  return (
    <>
      {header}
      {!collapsed &&
        channels.map((channel) => (
          <SidebarChannel
            key={channel.id}
            {...channel}
            selected={currentChannel?.id === channel.id}
          />
        ))}
      {collapsed && currentChannel && (
        <SidebarChannel key={currentChannel.id} {...currentChannel} selected />
      )}
    </>
  )
}

export default SidebarChannelList
