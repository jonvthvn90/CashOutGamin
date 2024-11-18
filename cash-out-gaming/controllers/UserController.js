
const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

router.get('/', async (req, res) => {
  const users = await userService.getUsers();
  res.send(users);
});

router.get('/:id', async (req, res) => {
  const user = await userService.getUser(req.params.id);
  res.send(user);
});

router.post('/', async (req, res) => {
  const user = await userService.createUser(req.body);
  res.send(user);
});

router.put('/:id', async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  res.send(user);
});

module.exports = router;