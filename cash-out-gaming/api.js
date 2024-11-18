const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);
// Import routes
const gameRoutes = require('./routes/gameRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const matchRoutes = require('./routes/matchRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const paypalRoutes = require('./routes/paypalRoutes');
const payoutRoutes = require('./routes/payoutRoutes');
const tournamentRoutes = require('./routes/tournamentRoutes');
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/games', gameRoutes);
app.use('/leaderboards', leaderboardRoutes);
app.use('/matches', matchRoutes);
app.use('/payments', paymentRoutes);
app.use('/paypal', paypalRoutes);
app.use('/payouts', payoutRoutes);
app.use('/tournaments', tournamentRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Cash Out Gaming API' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;