const GameExportController = require('../controllers/GameExportController');
const Game = require('../models/Game');
const assert = require('assert');

describe('GameExportController', () => {
  it('should export games', async () => {
    const games = await GameExportController.exportGames();
    assert(games.length > 0);
  });
});