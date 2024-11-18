const GameValidationController = require('../controllers/GameValidationController');
const Game = require('../models/Game');
const assert = require('assert');

describe('GameValidationController', () => {
  it('should validate games', async () => {
    const game = await GameValidationController.validateGame();
    assert(game);
  });
});