import React from "react"
import { useHistory } from "react-router-dom"

import HomePage from "app/pages/home/HomePage"

import useCurrentUser from "app/hooks/useCurrentUser"

const HomePageContainer = () => {
  const history = useHistory()

  useCurrentUser((currentUser) => {
    if (!currentUser) {
      history.push("/login")
    }
  })

  return <HomePage />
}

export default HomePageContainer
