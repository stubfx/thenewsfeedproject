import path from 'path';
import Fastify from 'fastify'
import fastifyStatic from '@fastify/static';
import {dirname} from "node:path";
import {fileURLToPath} from "node:url";
// import {init} from "./feedFetcher.js";
import {RSSFeedFactory} from "./RSSFeeds/RSSFeedFactory.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const FeedFactory = new RSSFeedFactory()

const fastify = Fastify({
    logger: false
})

// Setup our static files
fastify.register(fastifyStatic, {
    root: path.join(__dirname, "public"),
    prefix: "/", // optional: default '/'
});

fastify.get("/news/:feedName", async (request, reply) => {
    let feedName = request.params["feedName"];
    reply.send(await FeedFactory.getFeedObject(feedName).getData())
})

// Run the server and report out to the logs
fastify.listen(
    { port: 3000, host: "0.0.0.0" },
    (err) => {
        if (err) {
            console.error(err);
            // process.exit(1);
        }
        console.log(`Http server ready.`);
    }
);