export function generateChannelPath(channelPath: String) : Array<String>{
    return channelPath.split("/")
}

export function findFeedUrl(channelPath: String[], channels: RSS_Channel[]) {
    if (!channelPath || channelPath.length < 1 || !channels) {
        return null
    }
    let channelName = channelPath.shift()
    let currentChannel = channels.find(value => value.name === channelName)
    if (currentChannel) {
        // keep the url
        let url = currentChannel.url
        let childUrl = findFeedUrl(channelPath, currentChannel.subChannels)
        return childUrl || url
    }
    console.error(`No channel found for ${channelPath}`)
    return null;
}