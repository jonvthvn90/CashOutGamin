const UserService = require('../../services/UserService');
const userRepository = require('../../repositories/userRepository');

describe('UserService', () => {
  it('should create a new user', async () => {
    const user = new UserService();
    const newUser = await user.createUser({ name: 'Test User', email: 'test@example.com' });
    expect(newUser).toBeInstanceOf(Object);
  });

  it('should get a user by id', async () => {
    const user = new UserService();
    const userId = '12345';
    const userById = await user.getUser(userId);
    expect(userById).toBeInstanceOf(Object);
  });

  it('should update a user', async () => {
    const user = new UserService();
    const userId = '12345';
    const updatedUser = await user.updateUser(userId, { name: 'Updated Test User' });
    expect(updatedUser).toBeInstanceOf(Object);
  });

  it('should delete a user', async () => {
    const user = new UserService();
    const userId = '12345';
    await user.deleteUser(userId);
    const deletedUser = await user.getUser(userId);
    expect(deletedUser).toBeNull();
  });
});