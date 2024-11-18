const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  gameId: String,
  review: String,
  rating: Number,
  text: String,
  rating: Number,
  game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;