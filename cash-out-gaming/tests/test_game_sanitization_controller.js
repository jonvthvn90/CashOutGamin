const GameSanitizationController = require('../controllers/GameSanitizationController');
const Game = require('../models/Game');
const assert = require('assert');

describe('GameSanitizationController', () => {
  it('should sanitize games', async () => {
    const game = await GameSanitizationController.sanitizeGame();
    assert(game);
  });
});