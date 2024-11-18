const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  userId: String,
  name: String,
  email: String,
  preferredGenre: String
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;