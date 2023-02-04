import {AbstractRSSFeed} from "./AbstractRSSFeed.js";
import {BBC_London} from "./feeds/BBC/BBC_London.js";
import {BBC_World} from "./feeds/BBC/BBC_World.js";

export class RSSFeedFactory {

    private allFeeds:AbstractRSSFeed[] = [
        new BBC_World(),
        new BBC_London(),
    ]
    getFeedObject(feedName):AbstractRSSFeed {
        return this.allFeeds.find(feed => feedName === feed.getIdentifier())
    }
}