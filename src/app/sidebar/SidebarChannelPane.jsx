import React, { useState, useRef } from "react"

import AddIcon from "@material-ui/icons/Add"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import SidebarOption from "app/sidebar/SidebarMenuOption"
import SidebarChannel from "app/sidebar/SidebarChannel"

import useSignalRConnection from "hooks/useSignalRConnection"

import { channelService } from "services/ChannelService"

const SidebarChannelPane = () => {
  const [channels, setChannels] = useState([])

  useSignalRConnection(process.env.REACT_APP_CHANNEL_HUB_URL, (connection) => {
    connection.on("CreateChannel", (channel) => {
      setChannels([...channels, channel])
    })
  })

  const addChannel = async () => {
    const channelName = prompt("Please enter the channel name.")
    if (channelName) {
      await createChannel(channelName)
    }
  }

  const createChannel = async (channelName) => {
    try {
      await channelService.createChannel(channelName)
    } catch (e) {
      console.log("Unable to create channel.", e)
    }
  }

  return (
    <>
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add channel" onClick={addChannel} />
      {channels.map((channel) => (
        <SidebarChannel key={channel.id} title={channel.name} />
      ))}
    </>
  )
}

export default SidebarChannelPane
