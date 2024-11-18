const Game = require('../models/Game');

async function handleError(error) {
  console.error(error);
  return { error: 'Internal Server Error' };
}

module.exports = {
  handleError
};