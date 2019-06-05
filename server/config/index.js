let pkg = require("../package.json");

module.exports = {
  app: {
    title: pkg.title,
    version: pkg.version,
    description: pkg.description,
    keywords: pkg.keywords.join(","),
    url: "http://localhost:" + (process.env.PORT || 3000) + "/",
    //googleAnalyticsID: 'UA-xxxxx-x',
    contactEmail: "hello@vem-app.com"
  },
  port: process.env.DB_PORT || 3000,
  api: {
    zendesk: {
      basicAuth: {
        username: process.env.ZENDESK_USERNAME,
        password: process.env.ZENDESK_PASSWORD
      },
      baseURL: "https://tony1106.zendesk.com/api/v2"
    }
  },
  db: {
    uri:
      process.env.MONGO_URI ||
      "mongodb://localhost/" + process.env.DB_NAME + "-dev",
    options: {
      user: "",
      pass: "",
      keepAlive: 1,
      useNewUrlParser: true
    }
  },
  sessions: {
    cookie: {
      // session expiration is set by default to one week
      maxAge: 7 * 24 * (60 * 60 * 1000),

      // httpOnly flag makes sure the cookie is only accessed
      // through the HTTP protocol and not JS/browser
      httpOnly: true,

      // secure cookie should be turned to true to provide additional
      // layer of security so that the cookie is set only when working
      // in HTTPS mode.
      secure: false
    },

    // Cookie key name
    name: "sessionId",

    // Mongo store collection name
    collection: "sessions"
  }
};
