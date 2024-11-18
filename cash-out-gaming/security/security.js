import mongoose from 'mongoose';

const securitySchema = new mongoose.Schema({
  name: String,
  rules: [{ type: String }],
});
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Security = mongoose.model('Security', securitySchema);


router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).send({ message: 'Invalid email or password' });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).send({ message: 'Invalid email or password' });
  }
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: '1h',
  });
  res.send({ token });
});

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword });
  await user.save();
  res.send({ message: 'User created successfully' });
});

router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({ message: 'User not found' });
  }
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: '1h',
  });
  // Send email with token
  res.send({ message: 'Email sent successfully' });
});

router.post('/reset-password', async (req, res) => {
  const { token, password } = req.body;
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const user = await User.findById(decoded.userId);
  if (!user) {
    return res.status(404).send({ message: 'User not found' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  user.password = hashedPassword;
  await user.save();
  res.send({ message: 'Password reset successfully' });
});

module.exports = router;

export default Security;