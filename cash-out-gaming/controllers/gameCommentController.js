const express = require('express');
const router = express.Router();
const gameCommentLogic = require('./gameCommentLogic');

router.post('/gameComment', async (req, res) => {
  const gameId = req.body.gameId;
  const comment = req.body.comment;
  const newComment = await gameCommentLogic.createGameComment(gameId, comment);
  if (newComment.error) return res.status(400).send(newComment);
  res.send(newComment);
});

module.exports = router;