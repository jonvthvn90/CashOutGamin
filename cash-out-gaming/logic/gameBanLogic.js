const Game = require('./game');
const Ban = require('./ban');

const gameBanLogic = {
  async banGame(gameId) {
    const game = await Game.findById(gameId);
    if (!game) return { error: 'Game not found' };
    const newBan = new Ban({ gameId: gameId });
    await newBan.save();
    return newBan;
  }
};

module.exports = gameBanLogic;