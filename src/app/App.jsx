import React from "react"
import styled from "styled-components"

import { default as Chat } from "app/chat/ChatContainer"
import Header from "app/header/Header"
import Sidebar from "app/sidebar/Sidebar"

const App = () => {
  return (
    <div className="app">
      <Header />
      <AppBody>
        <Sidebar />
        <Chat />
      </AppBody>
    </div>
  )
}

export default App

export const AppBody = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`
