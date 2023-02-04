import {PARAM} from "./RSSFeeds/feedList.js";

export function generateChannelPath(channelPath: String) : Array<String>{
    return channelPath.split("/")
}

export function addUrlParams(url, params: String[]) : String{
    if (!url || !params || params.length < 1) {
        return url
    }
    let newUrl = url.replace(PARAM, params.shift())
    if (url === newUrl) {
        // the url has not changed, no more parameters to add.
        return newUrl
    }
    return addUrlParams(newUrl, params)
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
    return null;
}