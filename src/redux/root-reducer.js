import { combineReducers } from "redux"

import channelReducer from "redux/channel/reducers"
import chatReducer from "redux/chat/reducers"

const rootReducer = combineReducers({
  channel: channelReducer,
  chat: chatReducer,
})

export default rootReducer
