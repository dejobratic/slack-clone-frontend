import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"

import Button from "app/components/button/Button"

const Channel = ({ name, description }) => {
  return (
    <ChannelContainer>
      <Details>
        <Name>
          <h4>
            <strong>#{name}</strong>
          </h4>
          <StarBorderOutlinedIcon />
        </Name>
        <Description>{description}</Description>
      </Details>
      <Actions>
        <Button>AAA</Button>
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
  margin-top: 40px;
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

  > h4 > .MuiSvgIcon-root {
    margin-left: 20px;
    font-size: 18px;
  }
`

const Description = styled.div`
  color: var(--text-color-darker);

  > p > span {
    cursor: pointer;
  }

  > p > span:hover {
    text-decoration: underline;
  }
`

const Actions = styled.div`
  grid-row: 1;
  grid-column: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
