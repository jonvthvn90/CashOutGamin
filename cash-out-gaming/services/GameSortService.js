const Game = require('../models/Game');

async function sortGames(sort) {
  return await Game.find().sort(sort);
}

module.exports = {
  sortGames
};