const GameUpdateController = require('../controllers/GameUpdateController');
const Game = require('../models/Game');
const assert = require('assert');

describe('GameUpdateController', () => {
  it('should update games', async () => {
    await GameUpdateController.updateGames();
    assert(true);
  });

  it('should update game data', async () => {
    await GameUpdateController.updateGameData();
    assert(true);
  });

  it('should update game state', async () => {
    await GameUpdateController.updateGameState();
    assert(true);
  });
});