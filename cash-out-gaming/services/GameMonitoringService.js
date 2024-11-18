const Game = require('../models/Game');
const monitoring = require('monitoring');

async function monitorGames(games) {
  monitoring(games);
  return games;
}

module.exports = {
  monitorGames
};