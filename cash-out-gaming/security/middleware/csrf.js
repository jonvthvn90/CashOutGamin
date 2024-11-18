const express = require('express');
const csrf = require('csurf');

const app = express();

const csrfProtection = csrf({ cookie: true });

app.use(csrfProtection);

app.get('/form', (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() });
});

app.post('/process', (req, res) => {
  res.send('CSRF token is valid');
});