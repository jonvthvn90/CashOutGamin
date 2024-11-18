import express from 'express';
import { deploymentService } from './deploymentService';

const router = express.Router();

router.get('/deployments', async (req, res) => {
  const deployments = await deploymentService.getDeployments();
  res.json(deployments);
});

router.get('/deployments/:id', async (req, res) => {
  const deploymentDoc = await deploymentService.getDeployment(req.params.id);
  res.json(deploymentDoc);
});

router.post('/deployments', async (req, res) => {
  const { name, version } = req.body;
  const deploymentDoc = await deploymentService.createDeployment(name, version);
  res.json(deploymentDoc);
});

router.put('/deployments/:id', async (req, res) => {
  const { name, version } = req.body;
  const deploymentDoc = await deploymentService.updateDeployment(req.params.id, name, version);
  res.json(deploymentDoc);
});

router.delete('/deployments/:id', async (req, res) => {
  await deploymentService.deleteDeployment(req.params.id);
  res.json({ message: 'Deployment deleted successfully' });
});

export default router;