import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import HomePage from "app/pages/home/HomePage"

import { selectCurrentUser } from "redux/user-login/selectors"

const HomePageContainer = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const currentUser = useSelector(selectCurrentUser)

  useEffect(() => {
    if (!currentUser) {
      history.push("/login")
    }
  }, [dispatch, history, currentUser])

  return <HomePage />
}

export default HomePageContainer
