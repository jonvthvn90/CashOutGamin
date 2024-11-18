const express = require('express');
const router = express.Router();
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({ message: 'User not found' });
  }
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: '1h',
  });
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_password',
    },
  });
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: email,
    subject: 'Reset Password',
    text: `Click on this link to reset your password: http://localhost:3000/reset-password/${token}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: 'Error sending email' });
    }
    res.send({ message: 'Email sent successfully' });
  });
});

module.exports = router;