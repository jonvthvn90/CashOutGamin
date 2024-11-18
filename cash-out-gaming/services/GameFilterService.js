const Game = require('../models/Game');

async function filterGames(filter) {
  return await Game.find(filter);
}

module.exports = {
  filterGames
};