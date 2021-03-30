import {
  JsonHubProtocol,
  HubConnectionState,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr"

export const createSignalRConnection = async (hubUrl, token) => {
  const connection = createHubConnection(hubUrl, token)
  await startHubConnection(connection)

  return connection
}

const createHubConnection = (hubUrl, token) =>
  new HubConnectionBuilder()
    .withUrl(hubUrl, {
      accessTokenFactory: () => token,
    })
    .withAutomaticReconnect()
    .withHubProtocol(new JsonHubProtocol())
    .configureLogging(LogLevel.Information)
    .build()

const startHubConnection = async (connection) => {
  try {
    await connection.start()
    console.assert(connection.state === HubConnectionState.Connected)
    console.log("SignalR Connection established")
  } catch (err) {
    console.assert(connection.state === HubConnectionState.Disconnected)
    console.error("SignalR Connection Error: ", err)
    setTimeout(() => startHubConnection(connection), 5000)
  }
}
