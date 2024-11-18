const Game = require('../models/Game');
const logger = require('morgan');

async function logGames(games) {
  logger('games', games);
  return games;
}

module.exports = {
  logGames
};