const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/grafana', createProxyMiddleware({
  target: 'http://localhost:3000',
  changeOrigin: true,
  pathRewrite: { '^/grafana': '' },
}));

app.listen(3001, () => {
  console.log("Grafana proxy listening on port 3001");
});