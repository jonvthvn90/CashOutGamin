const Game = require('../models/Game');
const restore = require('restore');

async function restoreGames(games) {
  restore(games);
  return games;
}

module.exports = {
  restoreGames
};