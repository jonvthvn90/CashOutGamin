import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { authenticate } from '../middlewares/authMiddleware';

const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  await user.save();
  res.json(user);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  res.json(user);
});

router.get('/me', async (req, res) => {
  const user = await User.findById(req.user._id);
  res.json(user);
});

class UserController {
  async createUser(req, res) {
    const user = await UserService.createUser(req.body.name, req.body.email);
    res.status(201).json(user);
  }

  async getUsers(req, res) {
    const users = await UserService.getUsers();
    res.json(users);
  }

  async getUser(req, res) {
    const user = await UserService.getUser(req.params.id);
    res.json(user);
  }

  async updateUser(req, res) {
    const user = await UserService.updateUser(req.params.id, req.body.name, req.body.email);
    res.json(user);
  }

  async deleteUser(req, res) {
    await UserService.deleteUser(req.params.id);
    res.status(204).json({});
  }
}
module.exports = UserController;
module.exports = router;
router.get('/users', authenticate, userController.getUsers);
router.get('/users/:id', authenticate, userController.getUser);
router.post('/users', authenticate, userController.createUser);
router.put('/users/:id', authenticate, userController.updateUser);
router.delete('/users/:id', authenticate, userController.deleteUser);

export default router;