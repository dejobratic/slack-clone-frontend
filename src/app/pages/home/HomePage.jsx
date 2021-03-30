import React from "react"
import styled from "styled-components"

import { default as Chat } from "app/pages/home/chat/ChatContainer"
import Header from "app/pages/home/header/Header"
import Sidebar from "app/pages/home/sidebar/Sidebar"

const HomePage = () => {
  return (
    <HomePageContainer>
      <Header />
      <Main>
        <Sidebar />
        <Chat />
      </Main>
    </HomePageContainer>
  )
}

export default HomePage

const HomePageContainer = styled.div``

const Main = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
`
