import { createStore, applyMiddleware } from "redux"
import { persistStore } from "redux-persist"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"

import signalRMiddleware from "middleware/signalr/signalRMiddleware"

import rootReducer from "redux/root-reducer"
import rootSaga from "redux/root-saga"

const sagaMiddleware = createSagaMiddleware()
const allMiddleware = [sagaMiddleware, signalRMiddleware]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...allMiddleware))
)

sagaMiddleware.run(rootSaga)

const persister = persistStore(store)

export { store, persister }
