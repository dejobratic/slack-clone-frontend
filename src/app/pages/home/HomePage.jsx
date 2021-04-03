import React from "react"
import { Route } from "react-router-dom"
import styled from "styled-components"

import { default as Chat } from "app/pages/home/chat/ChatContainer"
import Header from "app/pages/home/header/Header"
import Sidebar from "app/pages/home/sidebar/Sidebar"
import ChannelBrowser from "./channel-browser/ChannelBrowser"

const HomePage = () => {
  return (
    <HomePageContainer>
      <Header />
      <Main>
        <Sidebar />
        <Route exact path="/channels" component={ChannelBrowser} />
        <Route exact path="/" component={Chat} />
      </Main>
    </HomePageContainer>
  )
}

export default HomePage

const HomePageContainer = styled.div``

const Main = styled.main`
  height: 100vh;

  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
`
