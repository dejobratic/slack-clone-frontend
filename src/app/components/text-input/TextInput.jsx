import React from "react"
import styled from "styled-components"

const TextInput = (props) => {
  return <Input {...props} />
}

export default TextInput

const Input = styled.textarea`
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
