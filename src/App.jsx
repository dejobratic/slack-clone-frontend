import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Chat from "Chat"
import Header from "header/Header"

const App = () => {
  return (
    <div className="app">
      <Router>
        <>
          <Switch>
            <Route exact path="/">
              <Header />
              <h1>This is the homepage</h1>
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  )
}

export default App
