import { httpService } from "services/HttpService"

class ChannelService {
  async createChannel(channelName) {
    return await httpService.post(process.env.REACT_APP_CHANNEL_URL, {
      channelName,
    })
  }
}

export const channelService = new ChannelService()
