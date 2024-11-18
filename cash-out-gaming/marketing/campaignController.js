import express from 'express';
import { campaignService } from './campaignService';

const router = express.Router();

router.get('/campaigns', async (req, res) => {
  const campaigns = await campaignService.getCampaigns();
  res.json(campaigns);
});

router.get('/campaigns/:id', async (req, res) => {
  const campaign = await campaignService.getCampaign(req.params.id);
  res.json(campaign);
});

router.post('/campaigns', async (req, res) => {
  const { name, description, startDate, endDate, budget } = req.body;
  const campaign = await campaignService.createCampaign(name, description, startDate, endDate, budget);
  res.json(campaign);
});

router.put('/campaigns/:id', async (req, res) => {
  const { name, description, startDate, endDate, budget } = req.body;
  const campaign = await campaignService.updateCampaign(req.params.id, name, description, startDate, endDate, budget);
  res.json(campaign);
});

router.delete('/campaigns/:id', async (req, res) => {
  await campaignService.deleteCampaign(req.params.id);
  res.json({ message: 'Campaign deleted successfully' });
});

export default router;