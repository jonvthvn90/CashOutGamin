import { Game } from '../models/Game';
import { User } from '../models/User';
import { GameRepository } from '../repositories/gameRepository';
const Game = require('../models/Game');
const User = require('../models/User');
const logger = require('../utils/loggerUtils');
class GameService {
  async createGame(name, description, userId) {
    const game = new Game({ name, description, userId });
    return game.save();
  }

  async getGames() {
    return Game.find();
  }

  async getGame(id) {
    return Game.findById(id);
  }

  async updateGame(id, name, description) {
    return Game.findByIdAndUpdate(id, { name, description }, { new: true });
  }

  async deleteGame(id) {
    return Game.findByIdAndRemove(id);
  }
}
export default GameService;

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

module.exports = GameService;

class GameService {
  async createGame(name, description, userId) {
    try {
      const game = new Game({ name, description, userId });
      return game.save();
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async getGames() {
    try {
      return Game.find();
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async getGame(id) {
    try {
      return Game.findById(id);
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async updateGame(id, name, description) {
    try {
      return Game.findByIdAndUpdate(id, { name, description }, { new: true });
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async deleteGame(id) {
    try {
      return Game.findByIdAndRemove(id);
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }
}

module.exports = GameService;