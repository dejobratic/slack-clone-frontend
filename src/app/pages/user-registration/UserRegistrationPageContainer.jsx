import React from "react"
import { useHistory } from "react-router-dom"

import UserRegistrationPage from "app/pages/user-registration/UserRegistrationPage"

import useCurrentUser from "app/hooks/useCurrentUser"

const UserRegistrationPageContainer = () => {
  const history = useHistory()

  useCurrentUser((currentUser) => {
    if (currentUser) {
      history.push("/")
    }
  })

  return <UserRegistrationPage />
}

export default UserRegistrationPageContainer
