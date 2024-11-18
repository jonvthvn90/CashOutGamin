import express from 'express';
import { productService } from './productService';

const router = express.Router();

router.get('/products', async (req, res) => {
  const products = await productService.getProducts();
  res.json(products);
});

router.get('/products/:id', async (req, res) => {
  const product = await productService.getProduct(req.params.id);
  res.json(product);
});

router.post('/products', async (req, res) => {
  const { name, description, price, quantity } = req.body;
  const product = await productService.createProduct(name, description, price, quantity);
  res.json(product);
});

router.put('/products/:id', async (req, res) => {
  const { name, description, price, quantity } = req.body;
  const product = await productService.updateProduct(req.params.id, name, description, price, quantity);
  res.json(product);
});

router.delete('/products/:id', async (req, res) => {
  await productService.deleteProduct(req.params.id);
  res.json({ message: 'Product deleted successfully' });
});

export default router;