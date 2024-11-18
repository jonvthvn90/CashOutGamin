const mongoose = require('mongoose');

const gameFeedbackSchema = new mongoose.Schema({
  text: String,
  game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const GameFeedback = mongoose.model('GameFeedback', gameFeedbackSchema);

module.exports = GameFeedback;