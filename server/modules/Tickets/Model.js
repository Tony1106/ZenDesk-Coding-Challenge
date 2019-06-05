const mongoose = require("../../core/mongoose");

const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  title: {
    type: String
  },
  des: {
    type: String
  }
});
let Post = mongoose.model("Posts", TicketSchema);
module.exports = Post;
