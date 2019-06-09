const Post = require("./Model");
const logger = require("../../core/logger");
const tickets = require("../../api/Zendesk/index");
const response = require("../../core/response");

module.exports = {
  index: function(req, res) {
    let { per_page, page } = req.query;
    let endpoint = "/tickets.json";
    if (per_page > 1 && page > 0) {
      endpoint = `${endpoint}?per_page=${per_page}&page=${page}`;
    }
    tickets
      .request(endpoint, "get")
      .then(response => {
        return res.send(response);
      })
      .catch(err => {
        response.json(res, null, err, null);
      });
  },
  getUser: function(req, res) {
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
    let ticketID = req.params.id;
    tickets
      .request(`/tickets/${ticketID}.json`, "get")
      .then(response => {
        return res.send(response);
      })
      .catch(err => {
        response.json(res, null, err, null);
      });
  }
};
