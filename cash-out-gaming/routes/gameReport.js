const express = require('express');
const router = express.Router();
const gameReportLogic = require('../logic/gameReportLogic');

router.post('/gameReport', async (req, res) => {
  const gameId = req.body.gameId;
  const reason = req.body.reason;
  const newReport = await gameReportLogic.createGameReport(gameId, reason);
  if (newReport.error) return res.status(400).send(newReport);
  res.send(newReport);
});

module.exports = router;