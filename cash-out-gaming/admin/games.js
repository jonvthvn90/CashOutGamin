const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('admin/games/index');
});

router.get('/:id', (req, res) => {
  res.render('admin/games/show');
});

router.post('/', (req, res) => {
  // create game logic here
});

router.put('/:id', (req, res) => {
  // update game logic here
});

router.delete('/:id', (req, res) => {
  // delete game logic here
});

module.exports = router;