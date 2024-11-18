import express from 'express';
import { schedulingService } from './schedulingService';

const router = express.Router();

router.get('/schedulings', async (req, res) => {
  const schedulings = await schedulingService.getSchedulings();
  res.json(schedulings);
});

router.get('/schedulings/:id', async (req, res) => {
  const schedulingDoc = await schedulingService.getScheduling(req.params.id);
  res.json(schedulingDoc);
});

router.post('/schedulings', async (req, res) => {
  const { name, tasks } = req.body;
  const schedulingDoc = await schedulingService.createScheduling(name, tasks);
  res.json(schedulingDoc);
});

router.put('/schedulings/:id', async (req, res) => {
  const { name, tasks } = req.body;
  const schedulingDoc = await schedulingService.updateScheduling(req.params.id, name, tasks);
  res.json(schedulingDoc);
});

router.delete('/schedulings/:id', async (req, res) => {
  await schedulingService.deleteScheduling(req.params.id);
  res.json({ message: 'Scheduling deleted successfully' });
});

export default router;