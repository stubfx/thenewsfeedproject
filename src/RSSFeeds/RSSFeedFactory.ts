import {StandardRSSFeedChannel} from "./StandardRSSFeedChannel.js";
import {RSSJsonInterface} from "./RSSJsonInterface.js";

export class RSSFeedFactory {

    // private allFeeds:StandardRSSFeedChannel[] = [
    //     new StandardRSSFeedChannel()
    // ]
    async getFeedObject(feedName: string): Promise<RSSJsonInterface[]> {
        let channel = new StandardRSSFeedChannel()
        return await channel.fetch(feedName)
    }
}