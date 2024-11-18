import express from 'express';
import { shippingService } from './shippingService';

const router = express.Router();

router.get('/shippings', async (req, res) => {
  const shippings = await shippingService.getShippings();
  res.json(shippings);
});

router.get('/shippings/:id', async (req, res) => {
  const shipping = await shippingService.getShipping(req.params.id);
  res.json(shipping);
});

router.post('/shippings', async (req, res) => {
  const { name, address, city, state, zip, country } = req.body;
  const shipping = await shippingService.createShipping(name, address, city, state, zip, country);
  res.json(shipping);
});

router.put('/shippings/:id', async (req, res) => {
  const { name, address, city, state, zip, country } = req.body;
  const shipping = await shippingService.updateShipping(req.params.id, name, address, city, state, zip, country);
  res.json(shipping);
});

router.delete('/shippings/:id', async (req, res) => {
  await shippingService.deleteShipping(req.params.id);
  res.json({ message: 'Shipping deleted successfully' });
});

export default router;