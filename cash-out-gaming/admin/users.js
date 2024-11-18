const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('admin/users/index');
});

router.get('/:id', (req, res) => {
  res.render('admin/users/show');
});

router.post('/', (req, res) => {
  // create user logic here
});

router.put('/:id', (req, res) => {
  // update user logic here
});

router.delete('/:id', (req, res) => {
  // delete user logic here
});

module.exports = router;