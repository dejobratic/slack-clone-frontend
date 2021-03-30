import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import UserRegistrationPage from "app/pages/user-registration/UserRegistrationPage"

import { selectCurrentUser } from "redux/user-login/selectors"

const UserRegistrationPageContainer = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const currentUser = useSelector(selectCurrentUser)

  useEffect(() => {
    if (currentUser) {
      history.push("/")
    }
  }, [dispatch, history, currentUser])

  return <UserRegistrationPage />
}

export default UserRegistrationPageContainer
