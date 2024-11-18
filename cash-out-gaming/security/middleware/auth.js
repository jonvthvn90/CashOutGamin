const express = require('express');
const auth = require('basic-auth');

const app = express();

app.use((req, res, next) => {
  const credentials = auth(req);
  if (!credentials || credentials.name !== 'admin' || credentials.pass !== 'password') {
    res.set("WWW-Authenticate", "Basic realm=' example'").status(401).send('credentials required');
  } else {
    next();
  }
});