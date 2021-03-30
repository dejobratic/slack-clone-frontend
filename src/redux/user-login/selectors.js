import { createSelector } from "reselect"

export const selectUserLogin = (state) => state.userLogin

export const selectCurrentUser = createSelector(
  selectUserLogin,
  (login) => login.currentUser
)
