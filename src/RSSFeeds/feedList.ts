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
    },
    {
        //https://www.nytimes.com/rss
        name: "nytimes",
        url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
        subChannels: [
            {
                "name": "news",
                "url": "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
                "subChannels": [
                  {
                    "url": "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
                    "name": "NYTimes.comHomePage(U.S.)",
                    "subChannels": [
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
                        "name": "World",
                          "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Africa.xml",
                        "name": "Africa",
                          "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Americas.xml",
                        "name": "Americas",
                          "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/AsiaPacific.xml",
                        "name": "AsiaPacific",
                          "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml",
                        "name": "Europe",
                          "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/MiddleEast.xml",
                        "name": "MiddleEast",
                          "subChannels": null
                      }
                    ]
                  },
                  {
                    "name": "U.S.",
                    "url": "https://rss.nytimes.com/services/xml/rss/nyt/US.xml",
                    "subChannels": [
                      {
                        "name": "U.S.",
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/US.xml",
                        "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Education.xml",
                        "name": "Education",
                        "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Politics.xml",
                        "name": "Politics",
                        "subChannels": [
                          {
                            "url": "https://rss.nytimes.com/services/xml/rss/nyt/Upshot.xml",
                            "name": "TheUpshot",
                            "subChannels": null
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "N.Y./Region",
                    "url": "https://rss.nytimes.com/services/xml/rss/nyt/NYRegion.xml",
                    "subChannels": null
                  },
                  {
                    "url": "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
                    "name": "Business",
                    "subChannels": [
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
                        "name": "Business",
                        "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/EnergyEnvironment.xml",
                        "name": "Energy&Environment",
                        "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/SmallBusiness.xml",
                        "name": "SmallBusiness",
                        "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Economy.xml",
                        "name": "Economy",
                        "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Dealbook.xml",
                        "name": "DealBook",
                        "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/MediaandAdvertising.xml",
                        "name": "Media&Advertising",
                        "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/YourMoney.xml",
                        "name": "YourMoney",
                        "subChannels": null
                      }
                    ]
                  },
                  {
                    "url": "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
                    "name": "Technology",
                    "subChannels": [
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
                        "name": "Technology",
                        "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/PersonalTech.xml",
                        "name": "PersonalTech",
                        "subChannels": null
                      }
                    ]
                  },
                  {
                    "url": "https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml",
                    "name": "Sports",
                    "subChannels": [
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Baseball.xml",
                        "name": "Baseball",
                        "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/CollegeBasketball.xml",
                        "name": "CollegeBasketball",
                        "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/CollegeFootball.xml",
                        "name": "CollegeFootball",
                        "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Golf.xml",
                        "name": "Golf",
                        "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Hockey.xml",
                        "name": "Hockey",
                        "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/ProBasketball.xml",
                        "name": "Pro-Basketball",
                        "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/ProFootball.xml",
                        "name": "Pro-Football",
                        "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Soccer.xml",
                        "name": "Soccer",
                        "subChannels": null
                      },
                      {
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Tennis.xml",
                        "name": "Tennis",
                        "subChannels": null
                      }
                    ]
                  },
                  {
                    "url": "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
                    "name": "Science",
                    "subChannels": [
                      {
                        "name": "Science",
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
                        "subChannels": null
                      },
                      {
                        "name": "Environment",
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Climate.xml",
                        "subChannels": null
                      },
                      {
                        "name": "Space & Cosmos",
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Space.xml",
                        "subChannels": null
                      }
                    ]
                  },
                  {
                    "url": "https://rss.nytimes.com/services/xml/rss/nyt/Health.xml",
                    "name": "Health",
                    "subChannels": [
                      {
                        "name": "Health",
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Health.xml",
                        "subChannels": null
                      },
                      {
                        "name": "wellblog",
                        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Well.xml",
                        "subChannels": null
                      }
                    ]
                  }
                ]
              }//https://blog.feedspot.com/world_news_rss_feeds/
        ]
    }
]