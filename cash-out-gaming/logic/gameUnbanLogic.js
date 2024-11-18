const Game = require('./game');
const Ban = require('./ban');

const gameUnbanLogic = {
  async unbanGame(gameId) {
    const game = await Game.findById(gameId);
    if (!game) return { error: 'Game not found' };
    await Ban.deleteOne({ gameId: gameId });
    return { message: 'Game unbanned successfully' };
  }
};

module.exports = gameUnbanLogic;