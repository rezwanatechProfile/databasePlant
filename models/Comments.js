const mongoose = require("mongoose");

// Models:
// this is just a sample model for a blog post
const CommentsSchema = new mongoose.Schema({
  id: {Number},
  body: { type: String},
  username: { type: String},
  createdBy: { type: String },
  userId: {Number},
  parentId: {Number},

});

const Comments = mongoose.model("Comments", CommentsSchema);

module.exports = Comments;