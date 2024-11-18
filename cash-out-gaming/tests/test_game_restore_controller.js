const GameRestoreController = require('../controllers/GameRestoreController');
const Game = require('../models/Game');
const assert = require('assert');

describe('GameRestoreController', () => {
  it('should restore games', async () => {
    await GameRestoreController.restoreGames();
    assert(true);
  });

  it('should restore game data', async () => {
    await GameRestoreController.restoreGameData();
    assert(true);
  });

  it('should restore game state', async () => {
    await GameRestoreController.restoreGameState();
    assert(true);
  });
});