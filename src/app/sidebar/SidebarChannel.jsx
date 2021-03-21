import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled, { css } from "styled-components"

import { openChannel } from "redux/channel/actions"
import { selectCurrentChannel } from "redux/channel/selectors"

const SidebarChannel = ({ id, name, selected }) => {
  const dispatch = useDispatch()
  const currentChannel = useSelector(selectCurrentChannel)

  const handleOpenChannel = () => {
    if (currentChannel?.id !== id) {
      dispatch(openChannel({ id, name }))
    }
  }

  return (
    <SidebarChannelContainer selected={selected} onClick={handleOpenChannel}>
      <h3>
        <span>#</span>
        {name}
      </h3>
    </SidebarChannelContainer>
  )
}

export default SidebarChannel

const getHoverEffect = ({ selected }) => (selected ? css`` : hover)

const SidebarChannelContainer = styled.div.attrs(({ selected }) => ({
  textColor: selected ? "--text-color" : "--text-color-darker",
  backgroundColor: selected ? "--active-item-color" : "--slack-color",
}))`
  color: var(${(props) => props.textColor});
  background-color: var(${(props) => props.backgroundColor});
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  ${getHoverEffect}

  > h3 {
    padding: 10px 0;
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`
const hover = css`
  :hover {
    opacity: 0.9;
    background-color: var(--slack-color-darker);
  }
`
