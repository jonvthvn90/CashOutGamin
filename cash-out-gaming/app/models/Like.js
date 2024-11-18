const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  gameId: String
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;