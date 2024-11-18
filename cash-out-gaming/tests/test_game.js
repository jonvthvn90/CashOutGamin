const request = require('supertest');
const app = require('../app');
const Game = require('../models/Game');
const assert = require('assert');

describe('Game model', () => {
  it('should create a new game', async () => {
    const game = new Game({ title: 'Test Game', description: 'Test game description' });
    await game.save();
    assert(game._id);
  });

  it('should retrieve a game by id', async () => {
    const game = await Game.findById('1234567890');
    assert(game);
  });

  it('should update a game', async () => {
    const game = await Game.findById('1234567890');
    game.title = 'Updated Test Game';
    await game.save();
    assert(game.title === 'Updated Test Game');
  });

  it('should delete a game', async () => {
    await Game.findByIdAndRemove('1234567890');
    const game = await Game.findById('1234567890');
    assert(!game);
  });

describe('Game API', () => {
  it('should return a list of games', async () => {
    const response = await request(app).get('/games');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should return a single game', async () => {
    const response = await request(app).get('/games/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });
});

});