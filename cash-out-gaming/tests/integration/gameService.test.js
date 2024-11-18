const GameService = require('../../services/GameService');
const gameRepository = require('../../repositories/gameRepository');

describe('GameService', () => {
  it('should create a new game', async () => {
    const game = new GameService();
    const newGame = await game.createGame({ title: 'Test Game', description: 'This is a test game' });
    expect(newGame).toBeInstanceOf(Object);
  });

  it('should get a game by id', async () => {
    const game = new GameService();
    const gameId = '12345';
    const gameById = await game.getGame(gameId);
    expect(gameById).toBeInstanceOf(Object);
  });

  it('should update a game', async () => {
    const game = new GameService();
    const gameId = '12345';
    const updatedGame = await game.updateGame(gameId, { title: 'Updated Test Game' });
    expect(updatedGame).toBeInstanceOf(Object);
  });

  it('should delete a game', async () => {
    const game = new GameService();
    const gameId = '12345';
    await game.deleteGame(gameId);
    const deletedGame = await game.getGame(gameId);
    expect(deletedGame).toBeNull();
  });
});