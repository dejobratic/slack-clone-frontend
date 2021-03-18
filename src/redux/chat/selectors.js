import { createSelector } from "reselect"

export const selectChat = (state) => state.chat

export const selectChatMessages = createSelector(
  selectChat,
  (chat) => chat.messages
)
