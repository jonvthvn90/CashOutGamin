import express from 'express';
import { orderService } from './orderService';

const router = express.Router();

router.get('/orders', async (req, res) => {
  const orders = await orderService.getOrders();
  res.json(orders);
});

router.get('/orders/:id', async (req, res) => {
  const order = await orderService.getOrder(req.params.id);
  res.json(order);
});

router.post('/orders', async (req, res) => {
  const { customerName, orderDate, total, status } = req.body;
  const order = await orderService.createOrder(customerName, orderDate, total, status);
  res.json(order);
});

router.put('/orders/:id', async (req, res) => {
  const { customerName, orderDate, total, status } = req.body;
  const order = await orderService.updateOrder(req.params.id, customerName, orderDate, total, status);
  res.json(order);
});

router.delete('/orders/:id', async (req, res) => {
  await orderService.deleteOrder(req.params.id);
  res.json({ message: 'Order deleted successfully' });
});

export default router;