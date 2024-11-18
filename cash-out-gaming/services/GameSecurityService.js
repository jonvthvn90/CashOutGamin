const Game = require('../models/Game');
const security = require('security');

async function secureGames(games) {
  security(games);
  return games;
}

module.exports = {
  secureGames
};