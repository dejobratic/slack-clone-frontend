class ChannelService {
  async createChannel(channelName) {
    await fetch(process.env.REACT_APP_CHANNEL_URL, {
      method: "POST",
      body: JSON.stringify({ channelName }),
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

export const channelService = new ChannelService()
