import React from "react"

import InsertCommentIcon from "@material-ui/icons/InsertComment"
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"

import SidebarMenuOption from "app/sidebar/SidebarMenuOption"

const SidebarMenu = () => {
  return (
    <>
      <SidebarMenuOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarMenuOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarMenuOption Icon={DraftsIcon} title="Saved items" />
      <SidebarMenuOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarMenuOption Icon={PeopleAltIcon} title="People & user groups" />
      <hr />
    </>
  )
}

export default SidebarMenu
