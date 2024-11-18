import express from 'express';
import { refundService } from './refundService';

const router = express.Router();

router.get('/refunds', async (req, res) => {
  const refunds = await refundService.getRefunds();
  res.json(refunds);
});

router.get('/refunds/:id', async (req, res) => {
  const refundDoc = await refundService.getRefund(req.params.id);
  res.json(refundDoc);
});

router.post('/refunds', async (req, res) => {
  const { orderId, amount, status } = req.body;
  const refundDoc = await refundService.createRefund(orderId, amount, status);
  res.json(refundDoc);
});

router.put('/refunds/:id', async (req, res) => {
  const { orderId, amount, status } = req.body;
  const refundDoc = await refundService.updateRefund(req.params.id, orderId, amount, status);
  res.json(refundDoc);
});

router.delete('/refunds/:id', async (req, res) => {
  await refundService.deleteRefund(req.params.id);
  res.json({ message: 'Refund deleted successfully' });
});

export default router;