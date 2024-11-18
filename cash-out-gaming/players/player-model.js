const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  games: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }],
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;