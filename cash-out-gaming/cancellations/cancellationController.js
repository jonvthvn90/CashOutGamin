import express from 'express';
import { cancellationService } from './cancellationService';

const router = express.Router();

router.get('/cancellations', async (req, res) => {
  const cancellations = await cancellationService.getCancellations();
  res.json(cancellations);
});

router.get('/cancellations/:id', async (req, res) => {
  const cancellationDoc = await cancellationService.getCancellation(req.params.id);
  res.json(cancellationDoc);
});

router.post('/cancellations', async (req, res) => {
  const { orderId, reason, status } = req.body;
  const cancellationDoc = await cancellationService.createCancellation(orderId, reason, status);
  res.json(cancellationDoc);
});

router.put('/cancellations/:id', async (req, res) => {
  const { orderId, reason, status } = req.body;
  const cancellationDoc = await cancellationService.updateCancellation(req.params.id, orderId, reason, status);
  res.json(cancellationDoc);
});

router.delete('/cancellations/:id', async (req, res) =>