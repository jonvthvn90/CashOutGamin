import express from 'express';
import { deploymentService } from './deploymentService';

const router = express.Router();

router.get('/preferences', async (req, res) => {
  const preferences = await deploymentService.getPreferences();
  res.json(preferences);
});

router.get('/preferences/:id', async (req, res) => {
  const preferenceDoc = await deploymentService.getPreference(req.params.id);
  res.json(preferenceDoc);
});

router.post('/preferences', async (req, res) => {
  const { name, value } = req.body;
  const preferenceDoc = await deploymentService.createPreference(name, value);
  res.json(preferenceDoc);
});

router.put('/preferences/:id', async (req, res) => {
  const { name, value } = req.body;
  const preferenceDoc = await deploymentService.updatePreference(req.params.id, name, value);
  res.json(preferenceDoc);
});

router.delete('/preferences/:id', async (req, res) => {
  await deploymentService.deletePreference(req.params.id);
  res.json({ message: 'Preference deleted successfully' });
});

export default router;