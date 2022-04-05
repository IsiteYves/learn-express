const mongoose = require("mongoose");

// Post schema (structure)
const schema = mongoose.Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model("Post", schema, "posts");
