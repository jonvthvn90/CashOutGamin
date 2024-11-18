const Game = require('../models/Game');

async function searchGames(query) {
  return await Game.find({ $text: { $search: query } });
}

module.exports = {
  searchGames
};