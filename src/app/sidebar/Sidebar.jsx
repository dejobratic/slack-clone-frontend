import React from "react"
import styled from "styled-components"

import SidebarHeader from "app/sidebar/SidebarHeader"
import SidebarMenu from "app/sidebar/SidebarMenu"
import SidebarChannelPane from "app/sidebar/SidebarChannelPane"

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader workspace="Slack HQ" user="Dejan Bratic" />
      <SidebarMenu />
      <SidebarChannelPane />
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
  flex: 0.3;
  color: var(--text-color);
  background-color: var(--slack-color);
  border-top: 1px solid var(--slack-color-lighter);
  max-width: 260px;
  margin-top: 46px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid var(--slack-color-lighter);
  }
`
