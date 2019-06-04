const axios = require("axios");
const logger = require("../core/logger");
const response = require("../core/response");
module.exports = class Services {
  constructor(API_name, baseURL) {
    this.API_name = API_name;
    this.baseURL = baseURL;

    this.config = {
      baseURL
    };
    this.axios = {};
  }
  setBasicAuth(username, password) {
    this.config = {
      ...this.config,
      auth: {
        username,
        password
      }
    };
  }
  createAxiosInstance() {
    this.axios = axios.create(this.config);
    return this;
  }
  request(url, method = "GET", data) {
    return new Promise((resolve, reject) => {
      this.axios
        .request({
          url,
          method,
          data
        })
        .then(response => {
          if (response.data) {
            return resolve(response.data);
          } else {
            return reject(response);
          }
        })
        .catch(error => {
          if (error.response && error.response.data) {
            console.log(error.response.data.error);

            logger.error(
              `Request to this ${this.API_name} API is error!}`,
              error.response.data.error
            );
            return reject(error.response.data.error);
          } else reject(error);
        });
    });
  }
};
