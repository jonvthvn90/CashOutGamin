const { Game } = require('../models/Game');

class GameFactory {
  static create(name, description, userId) {
    return new Game({ name, description, userId });
  }
}

module.exports = GameFactory;