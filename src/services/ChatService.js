import { httpService } from "services/HttpService"

class ChatService {
  async sendMessage(text) {
    return await httpService.post(process.env.REACT_APP_CHAT_MESSAGE_URL, {
      text,
    })
  }
}

export const chatService = new ChatService()
