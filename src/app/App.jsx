import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AppBody } from "app/App.Styled"

import Chat from "app/Chat"
import Header from "app/header/Header"
import Sidebar from "app/sidebar/Sidebar"

const App = () => {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route exact path="/"></Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  )
}

export default App
