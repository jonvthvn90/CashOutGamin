const { User } = require('../models/User');

class UserFactory {
  static create(name, email) {
    return new User({ name, email });
  }
}

module.exports = UserFactory;