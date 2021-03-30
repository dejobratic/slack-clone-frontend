import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import channelReducer from "redux/channel/reducers"
import chatReducer from "redux/chat/reducers"
import userLoginReducer from "redux/user-login/reducers"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userLogin"],
}

const rootReducer = combineReducers({
  channel: channelReducer,
  chat: chatReducer,
  userLogin: userLoginReducer,
})

export default persistReducer(persistConfig, rootReducer)
