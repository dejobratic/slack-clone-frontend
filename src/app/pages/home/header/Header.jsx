import React from "react"
import styled from "styled-components"

import AccountCircle from "@material-ui/icons/AccountCircle"
import AccessTime from "@material-ui/icons/AccessTime"
import Search from "@material-ui/icons/Search"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"

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

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color-darker);
  color: white;
`

export const HeaderLeftPane = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`

export const AvatarIcon = styled(AccountCircle)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`

export const TimeIcon = styled(AccessTime)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`

export const HeaderCenterPane = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: var(--slack-color);
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`

export const SearchIcon = styled(Search)``

export const HeaderRightPane = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`

export const HelpIcon = styled(HelpOutlineIcon)``
