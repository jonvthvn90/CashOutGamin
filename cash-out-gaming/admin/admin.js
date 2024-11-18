const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('admin/index');
});

router.get('/users', (req, res) => {
  res.render('admin/users');
});

router.get('/games', (req, res) => {
  res.render('admin/games');
});

router.get('/leaderboards', (req, res) => {
  res.render('admin/leaderboards');
});

router.get('/payments', (req, res) => {
  res.render('admin/payments');
});

module.exports = router;