import { User } from '../models/User';
import { UserRepository } from '../repositories/userRepository';
const User = require('../models/User');
const logger = require('../utils/loggerUtils');
class UserService {


  async createUser(name, email) {
    const user = new User({ name, email });
    return user.save();
  }

  async getUsers() {
    return User.find();
  }

  async getUser(id) {
    return User.findById(id);
  }

  async updateUser(id, name, email) {
    return User.findByIdAndUpdate(id, { name, email }, { new: true });
  }

  async deleteUser(id) {
    return User.findByIdAndRemove(id);
  }
}

module.exports = UserService;