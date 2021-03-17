import { httpService } from "services/HttpService"

const baseUrl = process.env.REACT_APP_CHANNEL_URL

class ChannelService {
  async getAll() {
    return await httpService.get(baseUrl)
  }

  async create(channelName) {
    return await httpService.post(baseUrl, {
      channelName,
    })
  }
}

export const channelService = new ChannelService()
