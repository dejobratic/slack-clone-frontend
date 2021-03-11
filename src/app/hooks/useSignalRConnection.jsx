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
  }, [url, callback])
}

export default useSignalRConnection
