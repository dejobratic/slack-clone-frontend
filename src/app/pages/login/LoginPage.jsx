import React from "react"
import styled from "styled-components"

import TextInput from "app/components/text-input/TextInput"
import Button from "app/components/button/Button"

const LoginPage = () => {
  return (
    <FormContainer>
      <FormHeader />
      <FormContent>
        <TextInput />
        <TextInput />
        <Button></Button>
      </FormContent>
    </FormContainer>
  )
}

export default LoginPage

const FormContainer = styled.form``

const FormHeader = styled.div``

const FormContent = styled.div``
