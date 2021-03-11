import { useEffect } from "react"
import * as signalR from "@microsoft/signalr"

const useSignalRConnection = (url, callback) => {
  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(url)
      .withAutomaticReconnect()
      .build()

    connection
      .start()
      .then((result) => {
        console.log("Connected!")
        callback(connection)
      })
      .catch((e) => console.log("Connection failed: ", e))

    return () => {
      connection
        .stop()
        .then((result) => {
          console.log("Stopped!")
        })
        .catch((e) => console.log("Stopping failed: ", e))
    }
  }, [url, callback])
}

export default useSignalRConnection
