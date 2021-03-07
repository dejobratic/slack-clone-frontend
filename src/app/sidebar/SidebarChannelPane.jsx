import React, { useState } from "react"

import AddIcon from "@material-ui/icons/Add"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import SidebarOption from "app/sidebar/SidebarMenuOption"
import SidebarChannel from "app/sidebar/SidebarChannel"

const SidebarChannelPane = () => {
  const [channels, setChannels] = useState([])

  const addChannel = () => {
    const channel = prompt("Please enter the channel name.")
    if (channel) {
      setChannels([...channels, channel])
    }
  }

  return (
    <>
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add channel" onClick={addChannel} />
      {channels.map((channel, idx) => (
        <SidebarChannel key={idx} title={channel} />
      ))}
    </>
  )
}

export default SidebarChannelPane
