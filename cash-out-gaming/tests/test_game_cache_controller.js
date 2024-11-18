const GameCacheController = require('../controllers/GameCacheController');
const Game = require('../models/Game');
const assert = require('assert');

describe('GameCacheController', () => {
  it('should cache games', async () => {
    const games = await GameCacheController.cacheGames();
    assert(games.length > 0);
  });

  it('should retrieve cached games', async () => {
    const games = await GameCacheController.getCachedGames();
    assert(games.length > 0);
  });

  it('should clear cache', async () => {
    await GameCacheController.clearCache();
    const games = await GameCacheController.getCachedGames();
    assert(games.length === 0);
  });
});