import express from 'express';
import { returnService } from './returnService';

const router = express.Router();

router.get('/returns', async (req, res) => {
  const returns = await returnService.getReturns();
  res.json(returns);
});

router.get('/returns/:id', async (req, res) => {
  const returnDoc = await returnService.getReturn(req.params.id);
  res.json(returnDoc);
});

router.post('/returns', async (req, res) => {
  const { orderId, reason, status } = req.body;
  const returnDoc = await returnService.createReturn(orderId, reason, status);
  res.json(returnDoc);
});

router.put('/returns/:id', async (req, res) => {
  const { orderId, reason, status } = req.body;
  const returnDoc = await returnService.updateReturn(req.params.id, orderId, reason, status);
  res.json(returnDoc);
});

router.delete('/returns/:id', async (req, res) => {
  await returnService.deleteReturn(req.params.id);
  res.json({ message: 'Return deleted successfully' });
});

export default router;