const handler = require("./Controller");

module.exports = function(app, db) {
  app.get("/tickets", handler.index);
  app.get("/tickets/user", handler.getUser);
  app.get("/tickets/:id", handler.show);
};
