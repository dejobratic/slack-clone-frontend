import { httpService } from "services/HttpService"

const baseUrl = process.env.REACT_APP_MESSAGE_URL

class MessageService {
  async getMessages(specification) {
    const { channelId, pageNumber, pageSize } = specification
    var url = `${baseUrl}?channelId=${channelId}&pageNumber=${pageNumber}&pageSize=${pageSize}`

    return await httpService.get(url)
  }

  async sendMessage(message) {
    await httpService.post(baseUrl, message)
  }
}

export const messageService = new MessageService()
