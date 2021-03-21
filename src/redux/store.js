import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"

import signalRMiddleware from "middleware/signalRMiddleware"

import rootReducer from "redux/root-reducer"
import rootSaga from "redux/root-saga"

const sagaMiddleware = createSagaMiddleware()
const allMiddleware = [sagaMiddleware, signalRMiddleware]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...allMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
