const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send({ message: 'Documentation successful' });
});

router.get('/api', async (req, res) => {
  res.send({ message: 'API documentation successful' });
});

module.exports = router;