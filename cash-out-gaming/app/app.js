const express = require('express');
const app = express();
const authRouter = require('./auth/auth');
const ciRouter = require('./ci/ci');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const gamesRouter = require('./games/games');
const authRouter = require('./auth/auth');
const complianceRouter = require('./compliance/compliance');
const deploymentRouter = require('./deployment/deployment');
const documentationRouter = require('./documentation/documentation');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the app!');
});

app.use('/auth', authRouter);
app.use('/ci', ciRouter);
app.use('/compliance', complianceRouter);
app.use('/deployment', deploymentRouter);
app.use('/documentation', documentationRouter);
app.listen(3000, () => {
  console.log('Server started on port 3000');
});