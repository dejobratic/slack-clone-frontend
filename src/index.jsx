import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"

import App from "app/App"

import { store, persister } from "redux/store"

import "index.css"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persister}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
