import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import styled, { css } from "styled-components"

import { openChannel } from "redux/channel/actions"
import { selectCurrentChannel } from "redux/channel/selectors"

const SidebarChannel = ({ id, name, selected }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const currentChannel = useSelector(selectCurrentChannel)

  const handleOpenChannel = () => {
    if (currentChannel?.id !== id) {
      dispatch(openChannel(id))
    }

    if (history?.location?.pathname !== "/") {
      history.push("/")
    }
  }

  return (
    <ChannelContainer selected={selected} onClick={handleOpenChannel}>
      <h3>
        <span>#</span>
        {name}
      </h3>
    </ChannelContainer>
  )
}

export default SidebarChannel

const ChannelContainer = styled.div.attrs(({ selected }) => ({
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

  ${({ selected }) => (selected ? css`` : hover)}

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
