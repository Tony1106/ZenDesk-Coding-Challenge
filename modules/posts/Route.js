module.exports = function(app, db) {
  app.get("/posts", (req, res) => {
    res.send("this is all the post");
  });
};
