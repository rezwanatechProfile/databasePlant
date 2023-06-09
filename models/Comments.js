const mongoose = require("mongoose");

// Models:
// this is just a sample model for a blog post
const CommentSchema = new mongoose.Schema({
  body: { type: String},
  username: { type: String},
  createdBy: { type: String },
  userId: {Number},
  parentId: {Number},

});

const Comments = mongoose.model("Comments", CommentSchema);

module.exports = Comments;