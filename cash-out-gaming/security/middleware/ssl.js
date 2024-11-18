const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

const options = {
  key: fs.readFileSync('path/to/ssl/key'),
  cert: fs.readFileSync('path/to/ssl/cert')
};

https.createServer(options, app).listen(443, () => {
  console.log('Server listening on port 443');
});