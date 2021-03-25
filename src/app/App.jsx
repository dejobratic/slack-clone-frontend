import React from "react"
import styled from "styled-components"

import { default as Chat } from "app/chat/ChatContainer"
import Header from "app/header/Header"
import Sidebar from "app/sidebar/Sidebar"

const App = () => {
  return (
    <AppContainer className="app">
      <Header />
      <Body>
        <Sidebar />
        <Chat />
      </Body>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div``

const Body = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`
