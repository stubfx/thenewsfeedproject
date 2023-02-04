// {
//   "title": "Joanne Shreeves: Woman hurled cement at neighbours in bitter feud",
//   "description": "Joanne Shreeves, daughter of ex-Tottenham Hotspur boss Peter, is convicted of offences related to the feud.",
//   "link": "https://www.bbc.co.uk/news/uk-england-london-64504868?at_medium=RSS&at_campaign=KARANGA",
//   "guid": {
//     "isPermaLink": "false",
//     "$t": "https://www.bbc.co.uk/news/uk-england-london-64504868"
//   },
//   "pubDate": "Fri, 03 Feb 2023 16:10:09 GMT"
// }

export interface RSSJsonInterface {
    title: String
    "description": String,
    "link": String,
    "guid": {
        "isPermaLink": String,
        "$t": String
    },
    "pubDate": String|null
}