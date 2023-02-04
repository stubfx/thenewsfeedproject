import {AbstractRSSFeed} from "../../AbstractRSSFeed.js";

export class BBC_London extends AbstractRSSFeed{

    constructor() {
        super("https://feeds.bbci.co.uk/news/england/london/rss.xml", "bbc_london");
    }

}