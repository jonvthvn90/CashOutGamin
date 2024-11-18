const Game = require('../models/Game');
const importService = require('import-service');

async function importGames(games) {
  return await importService.import(games);
}

module.exports = {
  importGames
};