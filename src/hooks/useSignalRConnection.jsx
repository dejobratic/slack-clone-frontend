import { useEffect } from "react"

import connection from "utils/signalRConnection"

const useSignalRConnection = (event, callback) => {
  useEffect(() => {
    connection.on(event, callback)
    console.log(`Subscribed to event: ${event}`)

    return () => {
      connection.off(event, callback)
      console.log(`Unsubscribed from event: ${event}`)
    }
  }, [event, callback])
}

export default useSignalRConnection
