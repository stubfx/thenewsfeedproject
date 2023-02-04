import {AbstractRSSFeed} from "../../AbstractRSSFeed.js";

export class BBC_World extends AbstractRSSFeed{

    constructor() {
        super("https://feeds.bbci.co.uk/news/world/rss.xml", "bbc_world");
    }

}