import {RSSJsonInterface} from "./RSSJsonInterface";
import * as Utils from "../utils.js";
import xmlParser from "xml2json";
import {RSS_STANDARD_FEEDS} from "./feedList.js";
import {findFeedUrl, generateChannelPath} from "../feedUtils.js";

export class StandardRSSFeedChannel {

    private readonly channelData : RSS_Channel[] = RSS_STANDARD_FEEDS

    public async fetch(feedPath : String) : Promise<RSSJsonInterface[]> {
        let url = findFeedUrl(generateChannelPath(feedPath), this.channelData);
        try {
            console.log(url)
            let response = await Utils.fetchWithTimeout(url)
            let rssText = await response.text()
            return JSON.parse(xmlParser.toJson(rssText, null))['rss']['channel']['item']
        } catch (e) {
            console.error(url)
            console.error(e)
        }
    }
}