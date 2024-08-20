export const QUERYKEYS = {
  NEWS: "news",
  HOT_TOPICS: "hotTopics",
  PERSONALIZED_FEED: "feed",
  GUARDIAN_NEWS: "guardian-news",
  NYT_NEWS: "newyorktimes-news",
};

export const API_SOURCES = {
  NEWS_API: {
    NAME: 1,
    URL: "https://newsapi.org/v2/",
    KEY: "&apiKey=88e8c42accea42d1b25d2e9f1e5cf9de",
  },
  GUARDIAN_API: {
    NAME: 2,
    URL: "https://content.guardianapis.com/",
    KEY: "&api-key=1cca15e1-ada5-49c5-9d06-dcc58bfe04ba",
  },
  NYTIMES: {
    NAME: 3,
    URL: "https://api.nytimes.com/svc/search/v2/",
    KEY: "&api-key=Ohy7dUNn3XyO1HZyiBSvyMXg65ErQzhv",
  },
};

export const LOCAL_STORAGE = {
  PERSONALIZED_FEED_STORAGE: "personalizedFeed",
};

export const categories = [
  { id: 1, name: "business" },
  { id: 2, name: "entertainment" },
  { id: 3, name: "general" },
  { id: 4, name: "politics" },
  { id: 5, name: "U.S" },
  { id: 6, name: "Technology" },
];
export const sources = [
  { id: 1, name: "bbc-news" },
  { id: 2, name: "the-verge" },
  { id: 3, name: "google-news" },
  { id: 4, name: "The New York Times" },
];

export const authors = [
  { id: 1, name: "CNN" },
  { id: 2, name: "BBC.com" },
  { id: 3, name: "The Associated Press" },
  { id: 4, name: "NBC Chicago" },
  { id: 5, name: "John Doe" },
];
