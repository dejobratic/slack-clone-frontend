import { userLoginAction } from "redux/user-login/actions"

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
  loading: false,
}

const userLoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userLoginAction.SIGN_IN_START:
    case userLoginAction.SIGN_UP_START:
      return {
        ...state,
        currentUser: null,
        errorMessage: null,
        loading: true,
      }

    case userLoginAction.SIGN_IN_SUCCESS:
    case userLoginAction.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
        loading: false,
      }

    case userLoginAction.SIGN_IN_FAILURE:
    case userLoginAction.SIGN_UP_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
      }

    default:
      return state
  }
}

export default userLoginReducer
