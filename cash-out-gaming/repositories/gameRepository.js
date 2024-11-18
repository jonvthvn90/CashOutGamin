const { Game } = require('../models/Game');

class GameRepository {
  async findAll() {
    return Game.find();
  }

  async findById(id) {
    return Game.findById(id);
  }

  async create(game) {
    return Game.create(game);
  }

  async update(id, game) {
    return Game.findByIdAndUpdate(id, game, { new: true });
  }

  async delete(id) {
    return Game.findByIdAndRemove(id);
  }
}

module.exports = GameRepository;