import {BBC_World} from "./RSSFeeds/feeds/BBC/BBC_World.js";

export async function init() {
    try {
        let data = await new BBC_World().getData()
        console.log(data);
    } catch (e) {
        console.error(e)
    }
}