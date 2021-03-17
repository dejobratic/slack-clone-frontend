import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import Chat from "app/chat/Chat"
import Header from "app/header/Header"
import Sidebar from "app/sidebar/Sidebar"

import { getAllChannels } from "redux/channel/actions"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllChannels())
  }, [dispatch])

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
