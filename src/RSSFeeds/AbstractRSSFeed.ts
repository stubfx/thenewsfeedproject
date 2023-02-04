import {RSSJsonInterface} from "./RSSJsonInterface";
import * as Utils from "../utils.js";
import xmlParser from "xml2json";

export abstract class AbstractRSSFeed {

    private readonly url: String
    private readonly identifier: String

    protected constructor(url: string, identifier: string) {
        this.url = url
        this.identifier = identifier.toLowerCase()
    }

    public getIdentifier() : String {
        return this.identifier
    }

    public async getData() : Promise<RSSJsonInterface[]> {
        try {
            let response = await Utils.fetchWithTimeout(this.url)
            let rssText = await response.text()
            return JSON.parse(xmlParser.toJson(rssText, null))['rss']['channel']['item']
        } catch (e) {
            console.error(this.url)
            console.error(e)
        }
    }
}