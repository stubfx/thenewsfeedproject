export const PARAM = "%param%"

export const RSS_STANDARD_FEEDS: RSS_Channel[] = [
    {
        name: "google",
        url: `https://news.google.com/rss/search?q=${PARAM}&hl=${PARAM}`,
        subChannels: null
    },
    {
        name: "bbc",
        url: "https://feeds.bbci.co.uk/news/world/rss.xml",
        subChannels: [{
            name: "world",
            url: "https://feeds.bbci.co.uk/news/world/rss.xml",
            subChannels: null
        }, {
            name: "london",
            url: "https://feeds.bbci.co.uk/news/england/london/rss.xml",
            subChannels: null
        }
        ]
    },
    {
        name: "cbn",
        url: "https://www1.cbn.com/rss-cbn-articles-cbnnews.xml",
        subChannels: [{
            name: "cbn",
            url: "https://www1.cbn.com/rss-cbn-articles-cbnnews.xml",
            subChannels: null
        }, {
            name: "finance",
            url: "https://www1.cbn.com/rss-cbn-news-finance.xml",
            subChannels: null
        }, {
            name: "health_and_science",
            url: "https://www1.cbn.com/rss-cbn-news-health.xml",
            subChannels: null
        }, {
            name: "politics",
            url: "https://www1.cbn.com/rss-cbn-news-politics.xml",
            subChannels: null
        }
        ]
    },
    {
        //https://thewest.com.au/rss-feeds
        name: "thewest",
        url: "https://thewest.com.au/rss",
        subChannels: [{
            name: "latest",
            url: "https://thewest.com.au/rss",
            subChannels: null
        }, {
            name: "wa_news",
            url: "https://thewest.com.au/news/wa/rss",
            subChannels: null
        }, {
            name: "international",
            url: "https://thewest.com.au/news/world/rss",
            subChannels: null
        }, {
            name: "sport",
            url: "https://thewest.com.au/sport/rss",
            subChannels: null
        }, {
            name: "afl",
            url: "https://thewest.com.au/sport/afl/rss",
            subChannels: null
        }, {
            name: "business",
            url: "https://thewest.com.au/business/rss",
            subChannels: null
        }, {
            name: "politics",
            url: "https://thewest.com.au/politics/rss",
            subChannels: null
        }, {
            name: "lifestyle",
            url: "https://thewest.com.au/lifestyle/rss",
            subChannels: null
        }, {
            name: "entertainment",
            url: "https://thewest.com.au/entertainment/rss",
            subChannels: null
        }, {
            name: "travel",
            url: "https://thewest.com.au/travel/rss",
            subChannels: null
        }
        ]
    }
]