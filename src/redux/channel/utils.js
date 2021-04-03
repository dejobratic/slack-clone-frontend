export const updateChannelInList = (channelList, updatedChannel) =>
  channelList.map((currentChannel) =>
    updateChannelIfMatches(currentChannel, updatedChannel)
  )

export const updateChannelIfMatches = (channel, updatedChannel) =>
  channel.id === updatedChannel.id
    ? {
        ...channel,
        name: updatedChannel.name,
        description: updatedChannel.description,
      }
    : channel
