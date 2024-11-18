import express from 'express';
import { normalizationService } from './normalizationService';

const router = express.Router();

router.get('/normalizations', async (req, res) => {
  const normalizations = await normalizationService.getNormalizations();
  res.json(normalizations);
});

router.get('/normalizations/:id', async (req, res) => {
  const normalizationDoc = await normalizationService.getNormalization(req.params.id);
  res.json(normalizationDoc);
});

router.post('/normalizations', async (req, res) => {
  const { name, rules } = req.body;
  const normalizationDoc = await normalizationService.createNormalization(name, rules);
  res.json(normalizationDoc);
});

router.put('/normalizations/:id', async (req, res) => {
  const { name, rules } = req.body;
  const normalizationDoc = await normalizationService.updateNormalization(req.params.id, name, rules);
  res.json(normalizationDoc);
});

router.delete('/normalizations/:id', async (req, res) => {
  await normalizationService.deleteNormalization(req.params.id);
  res.json({ message: 'Normalization deleted successfully' });
});

export default router;