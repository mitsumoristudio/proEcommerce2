

import arcjet, {tokenBucket, shield, detectBot} from "@arcjet/node";
import dotenv from "dotenv";

dotenv.config();

// initialize arcjet
export const ajJet = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics:["ip.src"],
    rules: [
        // shield protects your app from common attacks e.g. SQL injection, XSS, CSRF attacks
        shield({mode:"LIVE"}),
        detectBot({
            mode:"LIVE",
            // Blocks all bots except search engines
            allow: [
                "CATEGORY:SEARCH_ENGINE",
                "POSTMAN",
                // See the full list at https://arcjet.com/bot-list
            ]
        }),
        // Create a token bucket rate limit.
        tokenBucket({
            mode:"LIVE",
            refillRate: 5, // Refill 5 tokens per interval
            interval: 30, // Refill every 20 secs
            capacity: 30 // Bucket capacity of 10 tokens
        })
    ]

})