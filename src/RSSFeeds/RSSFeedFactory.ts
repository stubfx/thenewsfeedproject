import {StandardRSSFeedChannel} from "./StandardRSSFeedChannel.js";
import {RSSJsonInterface} from "./RSSJsonInterface.js";

export class RSSFeedFactory {

    // private allFeeds:StandardRSSFeedChannel[] = [
    //     new StandardRSSFeedChannel()
    // ]
    async fetchData(feedName: string, params: String[] = []): Promise<RSSJsonInterface[]> {
        let channel = new StandardRSSFeedChannel()
        return await channel.fetch(feedName, params)
    }
}