const GameFeedback = require('../models/GameFeedback');

async function createGameFeedback(gameFeedback) {
  return await GameFeedback.create(gameFeedback);
}

async function getGameFeedback(id) {
  return await GameFeedback.findById(id);
}

async function updateGameFeedback(id, gameFeedback) {
  return await GameFeedback.findByIdAndUpdate(id, gameFeedback, { new: true });
}

async function deleteGameFeedback(id) {
  return await GameFeedback.findByIdAndRemove(id);
}

module.exports = {
  createGameFeedback,
  getGameFeedback,
  updateGameFeedback,
  deleteGameFeedback
};