const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  gameId: String
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;