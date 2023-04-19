const mongoose = require("mongoose");

// Models:
// this is just a sample model for a blog post
const BlogsSchema = new mongoose.Schema({
  title: { type: String},
  name: { type: String},
  createdBy: { type: String },
  image: { type: String },
  description: { type: String },
  typeofplant: { type: Boolean },
  date: { type: Date },
});

const Blogs = mongoose.model("Blogs", BlogsSchema);

module.exports = Blogs;
