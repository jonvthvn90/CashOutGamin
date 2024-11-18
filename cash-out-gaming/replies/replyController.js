import express from 'express';
import { replyService } from './replyService';

const router = express.Router();

router.get('/replies', async (req, res) => {
  const replies = await replyService.getReplies();
  res.json(replies);
});

router.get('/replies/:id', async (req, res) => {
  const replyDoc = await replyService.getReply(req.params.id);
  res.json(replyDoc);
});

router.post('/replies', async (req, res) => {
  const { content, author, comment } = req.body;
  const replyDoc = await replyService.createReply(content, author, comment);
  res.json(replyDoc);
});

router.put('/replies/:id', async (req, res) => {
  const { content, author, comment } = req.body;
  const replyDoc = await replyService.updateReply(req.params.id, content, author, comment);
  res.json(replyDoc);
});

router.delete('/replies/:id', async (req, res) => {
  await replyService.deleteReply(req.params.id);
  res.json({ message: 'Reply deleted successfully' });
});

export default router;