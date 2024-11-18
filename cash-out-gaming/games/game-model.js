const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: String,
  description: String,
  players: Number,
  duration: Number,
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;