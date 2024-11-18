const Game = require('../models/Game');
const cache = require('memory-cache');

async function cacheGames(games) {
  cache.put('games', games);
  return games;
}

async function getCachedGames() {
  return cache.get('games');
}

module.exports = {
  cacheGames,
  getCachedGames
};