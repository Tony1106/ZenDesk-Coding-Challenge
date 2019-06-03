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
  }
};
