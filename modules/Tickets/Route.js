const handler = require("./Controller");

module.exports = function(app, db) {
  app.get("/tickets", handler.index);
  app.get("/tickets/create", handler.create);
  app.post("/tickets", handler.store);
  app.get("/tickets/:id", handler.show);
  app.get("/tickets/:id/edit", handler.edit);
  app.put("/tickets/:id", handler.update);
  app.delete("/tickets", handler.delete);
};
