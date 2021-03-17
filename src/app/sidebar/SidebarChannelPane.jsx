import React from "react"
import { useDispatch, useSelector } from "react-redux"

import AddIcon from "@material-ui/icons/Add"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import SidebarOption from "app/sidebar/SidebarMenuOption"
import SidebarChannel from "app/sidebar/SidebarChannel"

import useSignalRConnection from "hooks/useSignalRConnection"

import { createChannel, addChannel, openChannel } from "redux/channel/actions"
import { selectAllChannels } from "redux/channel/selectors"

const SidebarChannelPane = () => {
  const dispatch = useDispatch()
  const channels = useSelector(selectAllChannels)

  useSignalRConnection(process.env.REACT_APP_CHANNEL_HUB_URL, (connection) => {
    connection.on("CreateChannel", (channel) => {
      dispatch(addChannel(channel))
      dispatch(openChannel(channel))
    })
  })

  const handleAddChannel = () => {
    const channelName = prompt("Please enter the channel name.")
    if (channelName) {
      dispatch(createChannel(channelName))
    }
  }

  return (
    <>
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption
        Icon={AddIcon}
        title="Add channel"
        onClick={handleAddChannel}
      />
      {channels.map((channel) => (
        <SidebarChannel key={channel.id} {...channel} />
      ))}
    </>
  )
}

export default SidebarChannelPane
