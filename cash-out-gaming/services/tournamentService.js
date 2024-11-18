const Tournament = require('../models/Tournament');

const tournamentService = {
  async createTournament(tournamentData) {
    const tournament = new Tournament(tournamentData);
    await tournament.save();
    return tournament;
  },
  async getTournaments() {
    const tournaments = await Tournament.find();
    return tournaments;
  },
  async getTournament(tournamentId) {
    const tournament = await Tournament.findById(tournamentId);
    return tournament;
  },
};

module.exports = tournamentService;