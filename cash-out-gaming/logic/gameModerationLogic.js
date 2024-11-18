const Game = require('./game');
const Moderation = require('./moderation');

const gameModerationLogic = {
  async moderateGame(gameId, action) {
    const game = await Game.findById(gameId);
    if (!game) return { error: 'Game not found' };
    const newModeration = new Moderation({ gameId: gameId, action: action });
    await newModeration.save();
    return newModeration;
  }
};

module.exports = gameModerationLogic;