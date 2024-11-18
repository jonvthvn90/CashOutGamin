const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: String,
  description: String,
  title: String,
  image: String,
  price: Number,
  category: String,
  genre: String,
  score: Number,
  rank: Number,
  platform: String,
  releaseDate: Date,
  rating: Number,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;