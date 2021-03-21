import { httpService } from "services/HttpService"

const baseUrl = process.env.REACT_APP_MESSAGE_URL

class MessageService {
  async getMessages(specification) {
    const { channelId, pageNumber, pageSize } = specification
    var url = `${baseUrl}?channelId=${channelId}&pageNumber=${pageNumber}&pageSize=${pageSize}`

    return await httpService.get(url)
  }
}

export const messageService = new MessageService()
