const Post = require("./Model");
module.exports = {
  index: function(req, res) {
    Post.find().then(data => res.send(data));
  },
  show: function(req, res) {
    res.send("show" + req.params.id);
  },
  store: function(req, res) {
    res.send("store" + req.params.id);
  },
  create: function(req, res) {
    let post = new Post({
      title: "WORLD",
      des: "des"
    });
    post.save().then(data => res.send(data));
  },
  update: function(req, res) {
    Post.findOne({ title: "hello" }).then(data => res.send(data));
  },
  edit: function(req, res) {
    res.send("edit");
  },
  delete: function(req, res) {
    //delete
  }
};
