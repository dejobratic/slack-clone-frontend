import React from "react"
import styled from "styled-components"

const SidebarMenuOption = ({ Icon, title, onClick }) => {
  return (
    <SidebarMenuOptionContainer onClick={onClick}>
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      <h3>{title}</h3>
    </SidebarMenuOptionContainer>
  )
}

export default SidebarMenuOption

const SidebarMenuOptionContainer = styled.div`
  color: var(--text-color-darker);
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: var(--slack-color-darker);
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`
