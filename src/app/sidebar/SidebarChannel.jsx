import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import { openChannel } from "redux/channel/actions"

const SidebarChannel = ({ id, name }) => {
  const dispatch = useDispatch()

  const handleOpenChannel = () => {
    dispatch(openChannel({ id, name }))
  }

  return (
    <SidebarChannelContainer onClick={handleOpenChannel}>
      <h3>
        <span>#</span>
        {name}
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
