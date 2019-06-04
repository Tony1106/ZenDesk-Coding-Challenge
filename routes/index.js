module.exports = function(app, db) {
  //Home page
  require("../modules/Tickets/Route")(app, db);
  // Handle errors
  require("./errors")(app, db);
};
