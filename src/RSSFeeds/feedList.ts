export const RSS_STANDARD_FEEDS: RSS_Channel[] = [{
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
    }
]