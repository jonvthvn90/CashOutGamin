import express from 'express';
import { sessionService } from './sessionService';

const router = express.Router();

router.get('/sessions', async (req, res) => {
  const sessions = await sessionService.getSessions();
  res.json(sessions);
});

router.get('/sessions/:id', async (req, res) => {
  const sessionDoc = await sessionService.getSession(req.params.id);
  res.json(sessionDoc);
});

router.post('/sessions', async (req, res) => {
  const { user, expiresAt } = req.body;
  const sessionDoc = await sessionService.createSession(user, expiresAt);
  res.json(sessionDoc);
});

router.put('/sessions/:id', async (req, res) => {
  const { user, expiresAt } = req.body;
  const sessionDoc = await sessionService.updateSession(req.params.id, user, expiresAt);
  res.json(sessionDoc);
});

router.delete('/sessions/:id', async (req, res) => {
  await sessionService.deleteSession(req.params.id);
  res.json({ message: 'Session deleted successfully' });
});

export default router;