import { createSelector } from "reselect"

const selectChannel = (state) => state.selectChannel

export const selectCurrentChannel = createSelector(
  selectChannel,
  (channel) => channel.current
)
