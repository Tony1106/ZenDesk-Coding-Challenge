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
module.exports = function(db) {
  const app = express();

  //Register middleware
  initMiddleWares(app);
  //Load routes

  require("../routes")(app, db);
  logger.warn(app);
  return app;
};
