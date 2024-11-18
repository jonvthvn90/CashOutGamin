import express from 'express';
import { threadService } from './threadService';

const router = express.Router();

router.get('/threads', async (req, res) => {
  const threads = await threadService.getThreads();
  res.json(threads);
});

router.get('/threads/:id', async (req, res) => {
  const threadDoc = await threadService.getThread(req.params.id);
  res.json(threadDoc);
});

router.post('/threads', async (req, res) => {
  const { title, content, author } = req.body;
  const threadDoc = await threadService.createThread(title, content, author);
  res.json(threadDoc);
});

router.put('/threads/:id', async (req, res) => {
  const { title, content, author } = req.body;
  const threadDoc = await threadService.updateThread(req.params.id, title, content, author);
  res.json(threadDoc);
});

router.delete('/threads/:id', async (req, res) => {
  await threadService.deleteThread(req.params.id);
  res.json({ message: 'Thread deleted successfully' });
});

export default router;