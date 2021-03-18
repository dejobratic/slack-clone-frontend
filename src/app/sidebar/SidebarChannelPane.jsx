import React from "react"
import { useDispatch } from "react-redux"

import AddIcon from "@material-ui/icons/Add"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import SidebarOption from "app/sidebar/SidebarMenuOption"
import SidebarChannel from "app/sidebar/SidebarChannel"

import { createChannel } from "redux/channel/actions"

const SidebarChannelPane = ({ channels }) => {
  const dispatch = useDispatch()

  const handleCreateChannel = () => {
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
        onClick={handleCreateChannel}
      />
      {channels.map((channel) => (
        <SidebarChannel key={channel.id} {...channel} />
      ))}
    </>
  )
}

export default SidebarChannelPane
