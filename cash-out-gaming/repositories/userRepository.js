const { User } = require('../models/User');

class UserRepository {
  async findAll() {
    return User.find();
  }

  async findById(id) {
    return User.findById(id);
  }

  async create(user) {
    return User.create(user);
  }

  async update(id, user) {
    return User.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(id) {
    return User.findByIdAndRemove(id);
  }
}

module.exports = UserRepository;