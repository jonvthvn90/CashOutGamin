const GamePaginationController = require('../controllers/GamePaginationController');
const Game = require('../models/Game');
const assert = require('assert');

describe('GamePaginationController', () => {
  it('should paginate games', async () => {
    const games = await GamePaginationController.paginateGames(1, 10);
    assert(games.length > 0);
  });

  it('should paginate games with offset', async () => {
    const games = await GamePaginationController.paginateGames(2, 10);
    assert(games.length > 0);
  });

  it('should paginate games with limit', async () => {
    const games = await GamePaginationController.paginateGames(1, 5);
    assert(games.length > 0);
  });
});