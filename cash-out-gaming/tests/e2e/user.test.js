const request = require('supertest');
const app = require('../../app');

describe('User', () => {
  it('should create a new user', async () => {
    const response = await request(app).post('/user').send({ name: 'Test User', email: 'test@example.com' });
    expect(response.status).toBe(201);
  });

  it('should get a user by id', async () => {
    const response = await request(app).get('/user/12345');
    expect(response.status).toBe(200);
  });

  it('should update a user', async () => {
    const response = await request(app).put('/user/12345').send({ name: 'Updated Test User' });
    expect(response.status).toBe(200);
  });

  it('should delete a user', async () => {
    const response = await request(app).delete('/user/12345');
    expect(response.status).toBe(200);
  });
});