import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import App from "app/App"

import store from "redux/store"

import "index.css"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
)
