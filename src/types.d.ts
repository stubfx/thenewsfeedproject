declare type RSS_Channel = {
    name: String
    url: String|null
    subChannels: RSS_Channel[]|null
}