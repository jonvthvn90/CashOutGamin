const express = require('express');
const router = express.Router();
const Product = require('./product-model');

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.send(product);
});

router.post('/', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send({ message: 'Product created successfully' });
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  product.name = req.body.name;
  product.price = req.body.price;
  await product.save();
  res.send({ message: 'Product updated successfully' });
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await Product.findByIdAndRemove(id);
  res.send({ message: 'Product deleted successfully' });
});

module.exports = router;