import express from 'express';
import { logService } from './logService';

const router = express.Router();

router.get('/logs', async (req, res) => {
  const logs = await logService.getLogs();
  res.json(logs);
});

router.get('/logs/:id', async (req, res) => {
  const logDoc = await logService.getLog(req.params.id);
  res.json(logDoc);
});

router.post('/logs', async (req, res) => {
  const { message, level } = req.body;
  const logDoc = await logService.createLog(message, level);
  res.json(logDoc);
});

router.put('/logs/:id', async (req, res) => {
  const { message, level } = req.body;
  const logDoc = await logService.updateLog(req.params.id, message, level);
  res.json(logDoc);
});

router.delete('/logs/:id', async (req, res) => {
  await logService.deleteLog(req.params.id);
  res.json({ message: 'Log deleted successfully' });
});

export default router;