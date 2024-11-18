const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('admin/payments/index');
});

router.get('/:id', (req, res) => {
  res.render('admin/payments/show');
});

router.post('/', (req, res) => {
  // create payment logic here
});

router.put('/:id', (req, res) => {
  // update payment logic here
});

router.delete('/:id', (req, res) => {
  // delete payment logic here
});

module.exports = router;