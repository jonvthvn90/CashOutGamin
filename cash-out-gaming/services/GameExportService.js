const Game = require('../models/Game');
const exportService = require('export-service');

async function exportGames(games) {
  return await exportService.export(games);
}

module.exports = {
  exportGames
};