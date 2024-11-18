const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  gameId: String,
  comment: String
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;