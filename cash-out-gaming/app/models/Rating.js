const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  gameId: String,
  rating: Number
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;