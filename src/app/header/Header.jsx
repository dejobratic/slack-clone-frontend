import React from "react"

import {
  HeaderContainer,
  HeaderLeftPane,
  AvatarIcon,
  TimeIcon,
  HeaderCenterPane,
  SearchIcon,
  HeaderRightPane,
  HelpIcon,
} from "app/header/Header.Styled"

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeftPane>
        <AvatarIcon />
        <TimeIcon />
      </HeaderLeftPane>
      <HeaderCenterPane>
        <SearchIcon />
        <input type="text" />
      </HeaderCenterPane>
      <HeaderRightPane>
        <HelpIcon />
      </HeaderRightPane>
    </HeaderContainer>
  )
}

export default Header
