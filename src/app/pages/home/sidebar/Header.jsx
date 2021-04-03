import React from "react"
import styled from "styled-components"

import { default as UserStatusIcon } from "@material-ui/icons/FiberManualRecord"
import { default as CreateNewMessageIcon } from "@material-ui/icons/Create"

const SidebarHeader = ({ workspace, user }) => {
  return (
    <HeaderContainer>
      <UserLogin>
        <h2>{workspace}</h2>
        <h3>
          <UserStatusIcon />
          {user}
        </h3>
      </UserLogin>
      <CreateNewMessageIcon />
    </HeaderContainer>
  )
}

export default SidebarHeader

const HeaderContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--slack-color-lighter);
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`

const UserLogin = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: var(--active-presence-color);
  }
`
