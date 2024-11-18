const mongoose = require('mongoose');

const gameRatingSchema = new mongoose.Schema({
  rating: Number,
  game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const GameRating = mongoose.model('GameRating', gameRatingSchema);

module.exports = GameRating;