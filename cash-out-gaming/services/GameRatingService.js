const GameRating = require('../models/GameRating');

async function createGameRating(gameRating) {
  return await GameRating.create(gameRating);
}

async function getGameRating(id) {
  return await GameRating.findById(id);
}

async function updateGameRating(id, gameRating) {
  return await GameRating.findByIdAndUpdate(id, gameRating, { new: true });
}

async function deleteGameRating(id) {
  return await GameRating.findByIdAndRemove(id);
}

module.exports = {
  createGameRating,
  getGameRating,
  updateGameRating,
  deleteGameRating
};