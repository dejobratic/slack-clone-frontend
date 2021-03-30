import React from "react"
import { Route } from "react-router-dom"

import { default as HomePage } from "app/pages/home/HomePageContainer"
import { default as UserRegistrationPage } from "app/pages/user-registration/UserRegistrationPageContainer"

const App = () => {
  return (
    <>
      <Route path="/login" component={UserRegistrationPage} />
      <Route exact path="/" component={HomePage} />
    </>
  )
}

export default App
