import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styled from "styled-components"

import Chat from "app/chat/Chat"
import Header from "app/header/Header"
import Sidebar from "app/sidebar/Sidebar"

import useSignalRConnection from "app/hooks/useSignalRConnection"

const App = () => {
  useSignalRConnection("http://localhost:49883/hubs/chat", (connection) => {
    // connection.on("ReceiveMessage", (message) => {
    //   setMessages([...chatRef.current, message])
    //   console.log(messages)
    // })
    console.log(connection)
  })

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
