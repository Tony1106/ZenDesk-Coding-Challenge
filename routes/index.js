module.exports = function(app, db) {
  app.get("/", function(req, res) {
    res.send("GET request to the homepage");
  });
  // Handle errors
  require("./errors")(app, db);
};
