const mongoose = require("mongoose");

// Models:
// this is just a sample model for a blog post
const PlantsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdBy: { type: String },
  image: { type: String },
  description: { type: String },
  date: { type: Date },
});

const Plants = mongoose.model("Blogs", PlantsSchema);

module.exports = Plants;