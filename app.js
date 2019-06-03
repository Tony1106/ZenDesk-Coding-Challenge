require("dotenv").config();

const db = require("./core/mongo")();
const app = require("./core/express")(db);
const logger = require("./core/logger");

app.listen(process.env.PORT, () => {
  logger.warn("The server is runing on PORT: " + process.env.DB_PORT);
});
