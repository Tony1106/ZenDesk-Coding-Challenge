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
    let { per_page, page } = req.query;
    let endpoint = "/tickets.json";
    if (per_page && page) {
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
