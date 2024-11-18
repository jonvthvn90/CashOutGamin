const Leaderboard = require('./leaderboard-model');

const getAllLeaderboards = async () => {
  const leaderboards = await Leaderboard.find();
  return leaderboards;
};

const getLeaderboardById = async (id) => {
  const leaderboard = await Leaderboard.findById(id);
  return leaderboard;
};

const createLeaderboard = async (leaderboard) => {
  await leaderboard.save();
};

const updateLeaderboard = async (leaderboard) => {
  await leaderboard.save();
};

const deleteLeaderboard = async (id) => {
  await Leaderboard.findByIdAndRemove(id);
};

module.exports = {
  getAllLeaderboards,
  getLeaderboardById,
  createLeaderboard,
  updateLeaderboard,
  deleteLeaderboard,
};