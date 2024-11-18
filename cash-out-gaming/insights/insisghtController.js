import express from 'express';
import { insightService } from './insightService';

const router = express.Router();

router.get('/insights', async (req, res) => {
  const insights = await insightService.getInsights();
  res.json(insights);
});

router.get('/insights/:id', async (req, res) => {
  const insightDoc = await insightService.getInsight(req.params.id);
  res.json(insightDoc);
});

router.post('/insights', async (req, res) => {
  const { name, data } = req.body;
  const insightDoc = await insightService.createInsight(name, data);
  res.json(insightDoc);
});

router.put('/insights/:id', async (req, res) => {
  const { name, data } = req.body;
  const insightDoc = await insightService.updateInsight(req.params.id, name, data);
  res.json(insightDoc);
});

router.delete('/insights/:id', async (req, res) => {
  await insightService.deleteInsight(req.params.id);
  res.json({ message: 'Insight deleted successfully' });
});

export default router;