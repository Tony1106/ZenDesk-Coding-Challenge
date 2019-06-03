const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
let session = require("express-session");
let MongoStore = require("connect-mongo")(session);
const logger = require("../core/logger");
const config = require("../config");
initMiddleWares = app => {
  // Configure express app
  app.set("port", config.port);
  // Request body parsing middleware should be above methodOverride
  app.use(
    bodyParser.urlencoded({
      extended: true,
      limit: config.contentMaxLength * 2
    })
  );
  app.use(bodyParser.json());
  app.use(cookieParser());
};
function initSession(app, db) {
  // Express MongoDB session storage
  app.use(
    session({
      saveUninitialized: true,
      resave: false,
      secret: config.sessionSecret,
      store: new MongoStore({
        url: config.db.uri,
        collection: config.sessions.collection,
        autoReconnect: true
      }),
      cookie: config.sessions.cookie,
      name: config.sessions.name
    })
  );
}
module.exports = function(db) {
  const app = express();

  //Register middleware
  initMiddleWares(app);
  //   initSession(app, db);
  //Load routes
  app.get("/", function(req, res) {
    res.send("hello");
  });
  require("../routes")(app, db);
  logger.warn(app);
  return app;
};
