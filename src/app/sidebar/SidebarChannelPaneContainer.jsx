import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import SidebarChannelPane from "app/sidebar/SidebarChannelPane"

import { getAllChannels } from "redux/channel/actions"
import { selectChannel } from "redux/channel/selectors"

const SidebarChannelPaneContainer = () => {
  const dispatch = useDispatch()
  const { loading, all: channels } = useSelector(selectChannel)

  useEffect(() => {
    dispatch(getAllChannels())
  }, [dispatch])

  if (loading) return <h1>...</h1> // TODO: add loader or move getAllChannels logic to other component

  return <SidebarChannelPane channels={channels} />
}

export default SidebarChannelPaneContainer
