import React from "react"
import styled from "styled-components"

import SignInForm from "app/pages/user-registration/sign-in-form/SignInForm"
import SignUpForm from "app/pages/user-registration/sign-up-form/SignUpForm"

const UserRegistrationPage = () => {
  return (
    <UserRegistrationPageContainer>
      <SignInForm />
      <SignUpForm />
    </UserRegistrationPageContainer>
  )
}

export default UserRegistrationPage

const UserRegistrationPageContainer = styled.div`
  width: 850px;
  margin: 30px auto;

  display: flex;
  justify-content: space-between;
`
