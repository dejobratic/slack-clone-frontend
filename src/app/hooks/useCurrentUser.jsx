import { useEffect } from "react"
import { useSelector } from "react-redux"

import { selectCurrentUser } from "redux/user-login/selectors"

const useCurrentUser = (callback) => {
  const currentUser = useSelector(selectCurrentUser)

  useEffect(() => {
    callback(currentUser)
  }, [callback, currentUser])
}

export default useCurrentUser
