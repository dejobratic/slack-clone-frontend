import React from "react"
import { useHistory } from "react-router-dom"

import InsertCommentIcon from "@material-ui/icons/InsertComment"
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"

import SidebarItem from "app/pages/home/sidebar/SidebarItem"

const SidebarMenu = () => {
  const history = useHistory()

  return (
    <>
      <SidebarItem LeftIcon={<InsertCommentIcon />} title="Threads" />
      <SidebarItem LeftIcon={<InboxIcon />} title="Mentions & reactions" />
      <SidebarItem LeftIcon={<DraftsIcon />} title="Saved items" />
      <SidebarItem
        LeftIcon={<BookmarkBorderIcon />}
        title="Channel browser"
        onClick={() => history.push("/channels")}
      />
      <SidebarItem LeftIcon={<PeopleAltIcon />} title="People & user groups" />
      <hr />
    </>
  )
}

export default SidebarMenu
