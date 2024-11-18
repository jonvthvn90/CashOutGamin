import express from 'express';
import { userService } from './userService';

const router = express.Router();

router.get('/users', async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
});

router.get('/users/:id', async (req, res) => {
  const userDoc = await userService.getUser(req.params.id);
  res.json(userDoc);
});

router.post('/users', async (req, res) => {
  const { name, email, password } = req.body;
  const userDoc = await userService.createUser(name, email, password);
  res.json(userDoc);
});

router.put('/users/:id', async (req, res) => {
  const { name, email, password } = req.body;
  const userDoc = await userService.updateUser(req.params.id, name, email, password);
  res.json(userDoc);
});

router.delete('/users/:id', async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.json({ message: 'User deleted successfully' });
});

export default router;