const Game = require('../models/Game');
const backup = require('backup');

async function backupGames(games) {
  backup(games);
  return games;
}

module.exports = {
  backupGames
};