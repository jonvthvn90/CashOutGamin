const GameService = require('../services/GameService');
const Game = require('../models/Game');
const assert = require('assert');
describe('Game Service', () => {
  it('should get a list of games', async () => {
    const games = await GameService.getGames();
    expect(games).toBeInstanceOf(Array);
  });

  it('should get a single game', async () => {
    const game = await GameService.getGame(1);
    expect(game).toBeInstanceOf(Object);
  });

  describe('GameService', () => {
    it('should create a new game', async () => {
      const game = await GameService.createGame({ title: 'Test Game', description: 'Test game description' });
      assert(game._id);
    });
  
    it('should retrieve a game by id', async () => {
      const game = await GameService.getGame('1234567890');
      assert(game);
    });
  
    it('should update a game', async () => {
      const game = await GameService.updateGame('1234567890', { title: 'Updated Test Game' });
      assert(game.title === 'Updated Test Game');
    });
  
    it('should delete a game', async () => {
      await GameService.deleteGame('1234567890');
      const game = await GameService.getGame('1234567890');
      assert(!game);
    });
  });
});