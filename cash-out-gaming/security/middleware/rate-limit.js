const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

const limiter = rateLimit({
  windowMs: 60000,
  max: 100
});

app.use(limiter);

app.get('/data', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});