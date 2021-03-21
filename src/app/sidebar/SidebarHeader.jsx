import React from "react"
import styled from "styled-components"

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create"

const SidebarHeader = ({ workspace, user }) => {
  return (
    <SidebarHeaderContainer>
      <SidebarHeaderInfo>
        <h2>{workspace}</h2>
        <h3>
          <FiberManualRecordIcon />
          {user}
        </h3>
      </SidebarHeaderInfo>
      <CreateIcon />
    </SidebarHeaderContainer>
  )
}

export default SidebarHeader

const SidebarHeaderContainer = styled.div`
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

const SidebarHeaderInfo = styled.div`
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
