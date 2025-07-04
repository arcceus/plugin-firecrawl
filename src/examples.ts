import { ActionExample } from "@elizaos/core";

export const getScrapedDataExamples: ActionExample[][] = [
    [
        {
            name: "{{user1}}",
            content: {
                text: "Can you scrape the content from https://example.com?",
            },
        },
        {
            name: "{{agent}}",
            content: {
                text: "I'll scrape the content from that website for you.",
                action: "FIRECRAWL_GET_SCRAPED_DATA",
            },
        },
    ],
    [
        {
            name: "{{user1}}",
            content: {
                text: "Get the data from www.example.com/page",
            },
        },
        {
            name: "{{agent}}",
            content: {
                text: "I'll scrape the data from that webpage for you.",
                action: "FIRECRAWL_GET_SCRAPED_DATA",
            },
        },
    ],
    [
        {
            name: "{{user1}}",
            content: {
                text: "I need to scrape some website data.",
            },
        },
        {
            name: "{{agent}}",
            content: {
                text: "I can help you scrape website data. Please share the URL you'd like me to process.",
            },
        },
        {
            name: "{{user1}}",
            content: {
                text: "example.com/products",
            },
        },
        {
            name: "{{agent}}",
            content: {
                text: "I'll scrape that webpage and get the data for you.",
                action: "FIRECRAWL_GET_SCRAPED_DATA",
            },
        },
    ],
];

export const getSearchDataExamples: ActionExample[][] = [
    [
        {
            name: "{{user1}}",
            content: {
                text: "Find the latest news about SpaceX launches.",
            },
        },
        {
            name: "{{agentName}}",
            content: {
                text: "Here is the latest news about SpaceX launches:",
                action: "WEB_SEARCH",
            },
        },
    ],
    [
        {
            name: "{{user1}}",
            content: {
                text: "Can you find details about the iPhone 16 release?",
            },
        },
        {
            name: "{{agentName}}",
            content: {
                text: "Here are the details I found about the iPhone 16 release:",
                action: "WEB_SEARCH",
            },
        },
    ],
    [
        {
            name: "{{user1}}",
            content: {
                text: "What is the schedule for the next FIFA World Cup?",
            },
        },
        {
            name: "{{agentName}}",
            content: {
                text: "Here is the schedule for the next FIFA World Cup:",
                action: "WEB_SEARCH",
            },
        },
    ],
    [
        {
            name: "{{user1}}",
            content: { text: "Check the latest stock price of Tesla." },
        },
        {
            name: "{{agentName}}",
            content: {
                text: "Here is the latest stock price of Tesla I found:",
                action: "WEB_SEARCH",
            },
        },
    ],
    [
        {
            name: "{{user1}}",
            content: {
                text: "What are the current trending movies in the US?",
            },
        },
        {
            name: "{{agentName}}",
            content: {
                text: "Here are the current trending movies in the US:",
                action: "WEB_SEARCH",
            },
        },
    ],
    [
        {
            name: "{{user1}}",
            content: {
                text: "What is the latest score in the NBA finals?",
            },
        },
        {
            name: "{{agentName}}",
            content: {
                text: "Here is the latest score from the NBA finals:",
                action: "WEB_SEARCH",
            },
        },
    ],
    [
        {
            name: "{{user1}}",
            content: { text: "When is the next Apple keynote event?" },
        },
        {
            name: "{{agentName}}",
            content: {
                text: "Here is the information about the next Apple keynote event:",
                action: "WEB_SEARCH",
            },
        },
    ],
];
