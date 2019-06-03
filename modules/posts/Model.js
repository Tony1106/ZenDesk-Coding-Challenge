const mongoose = require("../../core/mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String
  },
  des: {
    type: String
  }
});
let Post = mongoose.model("Posts", PostSchema);
module.exports = Post;
