const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Games API endpoint' });
});

module.exports = router;