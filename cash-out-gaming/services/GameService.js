const Game = require('../models/Game');

async function getGames() {
  return await Game.find();
}

async function getGame(id) {
  return await Game.findById(id);
}

async function createGame(game) {
  return await Game.create(game);
}

async function updateGame(id, game) {
  return await Game.findByIdAndUpdate(id, game, { new: true });
}

async function deleteGame(id) {
  return await Game.findByIdAndRemove(id);
}


module.exports = {
  getGames,
  getGame,
  createGame,
  updateGame
};