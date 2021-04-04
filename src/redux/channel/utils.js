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
        subscriberIds: updatedChannel.subscriberIds,
      }
    : channel

export const addChannelToList = (channelList, newChannel) =>
  channelList.map((channel) => channel.id).includes(newChannel.id)
    ? channelList
    : [...channelList, newChannel]

export const removeChannelFromList = (channelList, existingChannel) =>
  channelList.filter((channel) => channel.id !== existingChannel.id)
