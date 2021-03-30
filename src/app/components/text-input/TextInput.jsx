import React from "react"
import styled from "styled-components"

const TextInput = ({ as = "input", label, ...restProps }) => {
  return (
    <TextInputContainer>
      <Label>{label}</Label>
      <Input as={as} {...restProps} />
    </TextInputContainer>
  )
}

export default TextInput

const TextInputContainer = styled.div``

const Label = styled.div`
  font-size: small;
  font-weight: 700;
  margin-bottom: 5px;
`

const Input = styled.div`
  resize: none;
  width: 95%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
  cursor: text;

  :focus {
    outline: none;
  }
`
