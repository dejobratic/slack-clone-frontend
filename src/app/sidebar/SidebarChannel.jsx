import React from "react"
import styled from "styled-components"

const SidebarChannel = ({ title }) => {
  const openChannel = () => {
    console.log("open channel")
  }

  return (
    <SidebarChannelContainer onClick={openChannel}>
      <h3>
        <span>#</span>
        {title}
      </h3>
    </SidebarChannelContainer>
  )
}

export default SidebarChannel

const SidebarChannelContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    padding: 10px 0;
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`
