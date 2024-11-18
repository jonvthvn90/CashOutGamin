const GameAuthenticationController = require('../controllers/GameAuthenticationController');
const Game = require('../models/Game');
const assert = require('assert');

describe('GameAuthenticationController', () => {
  it('should authenticate games', async () => {
    const game = await GameAuthenticationController.authenticateGame();
    assert(game);
  });
});