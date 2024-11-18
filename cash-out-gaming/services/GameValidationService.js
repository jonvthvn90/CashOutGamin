const Game = require('../models/Game');
const validator = require('validator');

async function validateGame(game) {
  const errors = [];
  if (!validator.isLength(game.title, { min: 1, max: 50 })) {
    errors.push('Title must be between 1 and 50 characters');
  }
  if (!validator.isLength(game.description, { min: 1, max: 200 })) {
    errors.push('Description must be between 1 and 200 characters');
  }
  if (errors.length > 0) {
    return { errors };
  }
  return { valid: true };
}

module.exports = {
  validateGame
};