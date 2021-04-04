import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

import Button from "app/components/button/Button"

import {
  subscribeToChannel,
  unsubscribeFromChannel,
} from "redux/channel/actions"
import { selectCurrentUser } from "redux/user-login/selectors"

const Channel = ({ id: channelId, name, description, subscriberIds }) => {
  const dispatch = useDispatch()

  const { id: subscriberId } = useSelector(selectCurrentUser)
  const subscribed = subscriberIds.includes(subscriberId)

  const handleUnsubscribeFromChannel = () => {
    dispatch(unsubscribeFromChannel({ channelId, subscriberId }))
  }
  const handleSubscribeToChannel = () => {
    dispatch(subscribeToChannel({ channelId, subscriberId }))
  }

  return (
    <ChannelContainer>
      <Details>
        <Name>
          <h4>
            <strong>#{name}</strong>
          </h4>
        </Name>
        <Description>
          {subscribed && <span>Joined</span>}
          {subscribed && description && ` | `}
          {description}
        </Description>
      </Details>
      <Actions>
        {subscribed ? (
          <Button variant="basic" onClick={handleUnsubscribeFromChannel}>
            Leave
          </Button>
        ) : (
          <Button variant="primary" onClick={handleSubscribeToChannel}>
            Join
          </Button>
        )}
      </Actions>
    </ChannelContainer>
  )
}

export default Channel

const ChannelContainer = styled.div`
  grid-row: 1;
  grid-column: 2;

  display: grid;
  grid-template-columns: 1fr 1fr;

  padding: 15px;
  min-height: 45px;
  border-bottom: 1px solid lightgray;
`

const Details = styled.div`
  grid-row: 1;
  grid-column: 1;
`

const Name = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }
`

const Description = styled.div`
  color: var(--text-color-darker);

  > span {
    color: var(--green-color);
    font-weight: bold;
  }
`

const Actions = styled.div`
  grid-row: 1;
  grid-column: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
