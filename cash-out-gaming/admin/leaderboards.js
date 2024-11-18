const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('admin/leaderboards/index');
});

router.get('/:id', (req, res) => {
  res.render('admin/leaderboards/show');
});

router.post('/', (req, res) => {
  // create leaderboard logic here
});

router.put('/:id', (req, res) => {
  // update leaderboard logic here
});

router.delete('/:id', (req, res) => {
  // delete leaderboard logic here
});

module.exports = router;