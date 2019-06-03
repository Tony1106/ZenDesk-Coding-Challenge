module.exports = function(app, db) {
  app.get("/posts", require("./Controller").index);
  app.get("/posts/create", require("./Controller").create);
  app.post("/posts", require("./Controller").store);
  app.get("/posts/:id", require("./Controller").show);
  app.get("/posts/:id/edit", require("./Controller").edit);
  app.put("/posts/:id", require("./Controller").update);
  app.delete("/posts", require("./Controller").delete);
};
