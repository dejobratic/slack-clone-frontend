import { createSelector } from "reselect"

export const selectChannel = (state) => state.channel

export const selectAllChannels = createSelector(
  selectChannel,
  (channel) => channel.all
)

export const selectCurrentChannel = createSelector(
  selectChannel,
  (channel) => channel.current
)
