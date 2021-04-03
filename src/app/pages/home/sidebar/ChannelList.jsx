import React from "react"
import { useSelector } from "react-redux"

import Channel from "app/pages/home/sidebar/Channel"

import { selectCurrentChannel } from "redux/channel/selectors"

const SidebarChannelList = ({ header, channels, collapsed }) => {
  const currentChannel = useSelector(selectCurrentChannel)

  return (
    <>
      {header}
      {!collapsed &&
        channels.map((channel) => (
          <Channel
            key={channel.id}
            {...channel}
            selected={currentChannel?.id === channel.id}
          />
        ))}
      {collapsed && currentChannel && (
        <Channel key={currentChannel.id} {...currentChannel} selected />
      )}
    </>
  )
}

export default SidebarChannelList
