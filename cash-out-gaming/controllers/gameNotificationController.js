const express = require('express');
const router = express.Router();
const gameNotificationLogic = require('./gameNotificationLogic');

router.post('/gameNotification', async (req, res) => {
  const gameId = req.body.gameId;
  const message = req.body.message;
  const newNotification = await gameNotificationLogic.sendGameNotification(gameId, message);
  if (newNotification.error) return res.status(400).send(newNotification);
  res.send(newNotification);
});

module.exports = router;