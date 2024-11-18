const Game = require('./game');
const Notification = require('./notification');

const gameNotificationLogic = {
  async sendGameNotification(gameId, message) {
    const game = await Game.findById(gameId);
    if (!game) return { error: 'Game not found' };
    const newNotification = new Notification({ gameId: gameId, message: message });
    await newNotification.save();
    return newNotification;
  }
};

module.exports = gameNotificationLogic;