const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image : String,
  caption: String
});
const Note = mongoose.model("post", postSchema);

module.exports = Note  ;