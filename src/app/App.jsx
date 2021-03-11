import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styled from "styled-components"

import Chat from "app/chat/Chat"
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
              <Route exact path="/">
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  )
}

export default App

export const AppBody = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`
