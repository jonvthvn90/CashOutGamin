const mongoose = require('mongoose');

const dislikeSchema = new mongoose.Schema({
  gameId: String
});

const Dislike = mongoose.model('Dislike', dislikeSchema);

module.exports = Dislike;