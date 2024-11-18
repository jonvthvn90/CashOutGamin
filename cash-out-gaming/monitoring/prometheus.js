const express = require('express');
const client = require('prom-client');

const app = express();

client.collectDefaultMetrics();

app.get('/metrics', (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(client.register.metrics());
});

app.listen(9090, () => {
  console.log("Server listening on port 9090");
});