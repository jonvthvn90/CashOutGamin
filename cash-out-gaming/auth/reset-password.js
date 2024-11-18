const express = require('express');
const router = express.Router();
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/:token', async (req, res) => {
  const token = req.params.token;
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const user = await User.findById(decoded.userId);
  if (!user) {
    return res.status(404).send({ message: 'User not found' });
  }
  const { password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  user.password = hashedPassword;
  await user.save();
  res.send({ message: 'Password reset successfully' });
});

module.exports = router;