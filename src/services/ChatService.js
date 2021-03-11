class ChatService {
  async sendMessage(text) {
    await fetch(process.env.REACT_APP_CHAT_MESSAGE_URL, {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

export const chatService = new ChatService()
