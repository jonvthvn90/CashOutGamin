const Game = require('./game');
const Report = require('./report');

const gameReportLogic = {
  async createGameReport(gameId, reason) {
    const game = await Game.findById(gameId);
    if (!game) return { error: 'Game not found' };
    const newReport = new Report({ gameId: gameId, reason: reason });
    await newReport.save();
    return newReport;
  }
};

module.exports = gameReportLogic;