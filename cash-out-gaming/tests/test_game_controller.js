const request = require('supertest');
const app = require('../app');
const GameController = require('../controllers/GameController');
const Game = require('../models/Game');
const assert = require('assert');
describe('Game Controller', () => {
  it('should create a new game', async () => {
    const response = await request(app).post('/games').send({ name: 'New Game' });
    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('should update a game', async () => {
    const response = await request(app).put('/games/1').send({ name: 'Updated Game' });
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  describe('GameController', () => {
    it('should create a new game', async () => {
      const game = await GameController.createGame({ title: 'Test Game', description: 'Test game description' });
      assert(game._id);
    });
  
    it('should retrieve a game by id', async () => {
      const game = await GameController.getGame('1234567890');
      assert(game);
    });
  
    it('should update a game', async () => {
      const game = await GameController.updateGame('1234567890', { title: 'Updated Test Game' });
      assert(game.title === 'Updated Test Game');
    });
  
    it('should delete a game', async () => {
      await GameController.deleteGame('1234567890');
      const game = await GameController.getGame('1234567890');
      assert(!game);
    });
  });
});