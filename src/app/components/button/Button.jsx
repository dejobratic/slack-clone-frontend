import React from "react"
import styled from "styled-components"

const Button = ({ variant = "basic", ...restProps }) => {
  return <ButtonContainer className={variant} {...restProps} />
}

export default Button

const ButtonContainer = styled.button`
  color: white;
  display: block;
  font-weight: bold;
  text-align: center;
  line-height: medium;
  border-width: 0px;
  border-radius: 5px;
  overflow-wrap: break-word;
  height: 35px;
  width: 80px;
  cursor: pointer;

  &.basic {
    color: black;
    border-color: black;
    border-width: 1px;
    background-color: white;
  }

  &.basic:hover {
    background-color: #eeeeee;
  }

  &.primary {
    background-color: var(--green-color-darker);
  }

  &.primary:hover {
    background-color: var(--green-color);
  }
`
