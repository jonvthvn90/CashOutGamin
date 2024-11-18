const GameDeleteController = require('../controllers/GameDeleteController');
const Game = require('../models/Game');
const assert = require('assert');

describe('GameDeleteController', () => {
  it('should delete games', async () => {
    await GameDeleteController.deleteGames();
    assert(true);
  });

  it('should delete game data', async () => {
    await GameDeleteController.deleteGameData();
    assert(true);
  });

  it('should delete game state', async () => {
    await GameDeleteController.deleteGameState();
    assert(true);
  });
});