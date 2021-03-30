import React from "react"
import styled from "styled-components"

const Form = ({ header, content, actions, ...restProps }) => {
  return (
    <FormContainer {...restProps}>
      <FormHeader>{header}</FormHeader>
      <FormContent>{content}</FormContent>
      <FormActions>{actions}</FormActions>
    </FormContainer>
  )
}

export default Form

const FormContainer = styled.form`
  width: 380px;

  display: flex;
  flex-direction: column;
`

const FormHeader = styled.div`
  margin: 10px 0;

  display: flex;
  flex-direction: column;
`

const FormContent = styled.div`
  width: 100%;
  gap: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const FormActions = styled.div`
  margin: 20px 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
