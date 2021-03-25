import React from "react"

import InsertCommentIcon from "@material-ui/icons/InsertComment"
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"

import SidebarMenuOption from "app/sidebar/SidebarItem"

const SidebarMenu = () => {
  return (
    <>
      <SidebarMenuOption LeftIcon={<InsertCommentIcon />} title="Threads" />
      <SidebarMenuOption
        LeftIcon={<InboxIcon />}
        title="Mentions & reactions"
      />
      <SidebarMenuOption LeftIcon={<DraftsIcon />} title="Saved items" />
      <SidebarMenuOption
        LeftIcon={<BookmarkBorderIcon />}
        title="Channel browser"
      />
      <SidebarMenuOption
        LeftIcon={<PeopleAltIcon />}
        title="People & user groups"
      />
      <hr />
    </>
  )
}

export default SidebarMenu
