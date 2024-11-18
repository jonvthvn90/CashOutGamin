const GameReview = require('../models/GameReview');

async function createGameReview(gameReview) {
  return await GameReview.create(gameReview);
}

async function getGameReview(id) {
  return await GameReview.findById(id);
}

async function updateGameReview(id, gameReview) {
  return await GameReview.findByIdAndUpdate(id, gameReview, { new: true });
}

async function deleteGameReview(id) {
  return await GameReview.findByIdAndRemove(id);
}

module.exports = {
  createGameReview,
  getGameReview,
  updateGameReview,
  deleteGameReview
};