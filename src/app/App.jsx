import React from "react"
import { Route } from "react-router-dom"

import HomePage from "app/pages/home/HomePage"
import LoginPage from "app/pages/login/LoginPage"

const App = () => {
  return (
    <>
      <Route path="/login" component={LoginPage} />
      <Route exact path="/" component={HomePage} />
    </>
  )
}

export default App
