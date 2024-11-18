const Tournament = require('./tournament-model');

const getAllTournaments = async () => {
  const tournaments = await Tournament.find();
  return tournaments;
};

const getTournamentById = async (id) => {
  const tournament = await Tournament.findById(id);
  return tournament;
};

const createTournament = async (tournament) => {
  await tournament.save();
};

const updateTournament = async (tournament) => {
  await tournament.save();
};

const deleteTournament = async (id) => {
  await Tournament.findByIdAndRemove(id);
};

module.exports = {
  getAllTournaments,
  getTournamentById,
  createTournament,
  updateTournament,
  deleteTournament,
};