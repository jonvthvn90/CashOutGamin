const User = require('../models/User');
const Player = require('../models/Player');

const userProfileLogic = {
  async getUserProfile(userId) {
    const user = await User.findById(userId);
    if (!user) return { error: 'User not found' };
    const player = await Player.findOne({ userId: userId });
    if (!player) return { error: 'Player not found' };
    return { user, player };
  },
};

module.exports = userProfileLogic;