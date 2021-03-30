import React from "react"
import styled from "styled-components"

const SidebarItem = ({ title, onClick, LeftIcon, RightIcon }) => {
  return (
    <SidebarItemContainer onClick={onClick}>
      {LeftIcon}
      <h3>{title}</h3>
      {RightIcon}
    </SidebarItemContainer>
  )
}

export default SidebarItem

const SidebarItemContainer = styled.div`
  color: var(--text-color-darker);
  display: grid;
  grid-template-columns: auto 1fr auto;

  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  padding-right: 2px;
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

  > .MuiSvgIcon-root {
    font-size: large;
    padding: 10px;
  }
`
