const request = require('supertest');
const app = require('../../app');

describe('Rating', () => {
  it('should create a new rating', async () => {
    const response = await request(app).post('/rating').send({ rating: 5 });
    expect(response.status).toBe(201);
  });

  it('should get a rating by id', async () => {
    const response = await request(app).get('/rating/12345');
    expect(response.status).toBe(200);
  });

  it('should update a rating', async () => {
    const response = await request(app).put('/rating/12345').send({ rating: 4 });
    expect(response.status).toBe(200);
  });

  it('should delete a rating', async () => {
    const response = await request(app).delete('/rating/12345');
    expect(response.status).toBe(200);
  });
});