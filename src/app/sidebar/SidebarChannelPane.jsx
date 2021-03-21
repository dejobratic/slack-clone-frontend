import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import AddIcon from "@material-ui/icons/Add"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import SidebarOption from "app/sidebar/SidebarMenuOption"
import SidebarChannel from "app/sidebar/SidebarChannel"

import { getAllChannels, createChannel } from "redux/channel/actions"
import {
  selectAllChannels,
  selectCurrentChannel,
} from "redux/channel/selectors"

const SidebarChannelPane = () => {
  const dispatch = useDispatch()
  const channels = useSelector(selectAllChannels)
  const currentChannel = useSelector(selectCurrentChannel)

  useEffect(() => {
    dispatch(getAllChannels())
  }, [dispatch])

  const handleCreateChannel = () => {
    const channelName = prompt("Please enter the channel name.")
    if (channelName) {
      dispatch(createChannel({ channelName }))
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
        <SidebarChannel
          key={channel.id}
          {...channel}
          selected={currentChannel?.id === channel.id}
        />
      ))}
    </>
  )
}

export default SidebarChannelPane
