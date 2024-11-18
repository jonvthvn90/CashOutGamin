import mongoose from 'mongoose';
const express = require('express');
const router = express.Router();
const userController = require('./user-controller');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});


const User = mongoose.model('User', userSchema);

router.get('/', async (req, res) => {
  const users = await userController.getAllUsers();
  res.send(users);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const user = await userController.getUserById(id);
  res.send(user);
});

router.post('/', async (req, res) => {
  const user = new User(req.body);
  await userController.createUser(user);
  res.send({ message: 'User created successfully' });
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const user = await userController.getUserById(id);
  user.name = req.body.name;
  user.email = req.body.email;
  await userController.updateUser(user);
  res.send({ message: 'User updated successfully' });
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await userController.deleteUser(id);
  res.send({ message: 'User deleted successfully' });
});

module.exports = router;
export default User;