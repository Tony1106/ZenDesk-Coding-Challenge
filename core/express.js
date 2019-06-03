const express = require("express");
let morgan = require("morgan");
let bodyParser = require("body-parser");
const logger = require("../core/logger");
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
  return app;
};
