import React, { useState, useRef, useEffect } from "react"
import * as signalR from "@microsoft/signalr"

import AddIcon from "@material-ui/icons/Add"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import SidebarOption from "app/sidebar/SidebarMenuOption"
import SidebarChannel from "app/sidebar/SidebarChannel"

const SidebarChannelPane = () => {
  const [channels, setChannels] = useState([])

  const chatRef = useRef(null)
  chatRef.current = channels

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:49883/hubs/chat")
      .withAutomaticReconnect()
      .build()

    connection
      .start()
      .then((result) => {
        console.log("Connected!")

        connection.on("CreateChannel", (channel) => {
          setChannels([...chatRef.current, channel])
          console.log(channels)
        })
      })
      .catch((e) => console.log("Connection failed: ", e))
  }, [])

  const addChannel = async () => {
    const channelName = prompt("Please enter the channel name.")
    if (channelName) {
      await createChannel(channelName)
    }
  }

  const createChannel = async (channelName) => {
    try {
      await fetch("https://localhost:44387/chat/channels", {
        method: "POST",
        body: JSON.stringify({ channelName }),
        headers: {
          "Content-Type": "application/json",
        },
      })
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
