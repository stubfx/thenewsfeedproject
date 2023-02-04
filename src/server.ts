// import path from 'path';
import Fastify from 'fastify'
// import fastifyStatic from '@fastify/static';
// import {dirname} from "node:path";
// import {fileURLToPath} from "node:url";
import {RSSFeedFactory} from "./RSSFeeds/RSSFeedFactory.js";

// const __dirname = dirname(fileURLToPath(import.meta.url));

const FeedFactory = new RSSFeedFactory()

const fastify = Fastify({
    logger: false
})

// Setup our static files
// fastify.register(fastifyStatic, {
//     root: path.join(__dirname, "public"),
//     prefix: "/", // optional: default '/'
// });

fastify.get("/", async (request, reply) => {
    console.log(`Handling request: ${request.raw.url}`)
    let feedName = request.query["feed"];
    let p1 = request.query["p1"];
    let p2 = request.query["p2"];
    reply.send(await FeedFactory.fetchData(feedName, [p1, p2]))
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