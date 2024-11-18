const request = require('supertest');
const app = require('../../app');

describe('Comment', () => {
  it('should create a new comment', async () => {
    const response = await request(app).post('/comment').send({ text: 'This is a test comment' });
    expect(response.status).toBe(201);
  });

  it('should get a comment by id', async () => {
    const response = await request(app).get('/comment/12345');
    expect(response.status).toBe(200);
  });

  it('should update a comment', async () => {
    const response = await request(app).put('/comment/12345').send({ text: 'Updated test comment' });
    expect(response.status).toBe(200);
  });

  it('should delete a comment', async () => {
    const response = await request(app).delete('/comment/12345');
    expect(response.status).toBe(200);
  });
});