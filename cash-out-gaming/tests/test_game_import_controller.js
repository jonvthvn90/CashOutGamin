const GameImportController = require('../controllers/GameImportController');
const Game = require('../models/Game');
const assert = require('assert');

describe('GameImportController', () => {
  it('should import games', async () => {
    const games = await GameImportController.importGames();
    assert(games.length > 0);
  });
});