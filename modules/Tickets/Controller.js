const axios = require("axios");
const Post = require("./Model");
const tickets = require("../../api/Zendesk/index");
const logger = require("../../core/logger");
const response = require("../../core/response");
async function handleError(error) {
  try {
    throw new Error(error);
  } catch (error) {}
}
module.exports = {
  index: function(req, res) {
    tickets
      .request("/users.json", "get")
      .then(response => {
        return res.send(response);
      })
      .catch(err => {
        response.json(res, null, err, null);
      });
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
