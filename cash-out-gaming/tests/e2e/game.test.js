const request = require('supertest');
const app = require('../../app');

describe('Game', () => {
  it('should create a new game', async () => {
    const response = await request(app).post('/game').send({ title: 'Test Game', description: 'This is a test game' });
    expect(response.status).toBe(201);
  });

  it('should get a game by id', async () => {
    const response = await request(app).get('/game/12345');
    expect(response.status).toBe(200);
  });

  it('should update a game', async () => {
    const response = await request(app).put('/game/12345').send({ title: 'Updated Test Game' });
    expect(response.status).toBe(200);
  });

  it('should delete a game', async () => {
    const response = await request(app).delete('/game/12345');
    expect(response.status).toBe(200);
  });
});