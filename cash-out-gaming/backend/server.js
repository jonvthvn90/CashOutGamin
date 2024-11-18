const express = require(‘express’);
const app = express();
const mongoose = require(‘mongoose’);
const passport = require(‘passport’);
const LocalStrategy = require(‘passport-local’).Strategy;
const bcrypt = require(‘bcryptjs’);
const flash = require(‘connect-flash’);
const session = require(‘express-session’);
const MongoDBStore = require(‘connect-mongodb-session’)(session);

// Connect to MongoDB
mongoose.connect(‘mongodb://localhost/cashoutgaming’, { useNewUrlParser: true, useUnifiedTopology: true });

// Set up session store
const store = new MongoDBStore({ uri: ‘mongodb://localhost/cashoutgaming’, collection: ‘sessions’ });

// Set up passport
passport.use(new LocalStrategy({ usernameField: ‘username’, passwordField: ‘password’ }, (username, password, done) => {
  // Find user by username
  User.findOne({ username: username }, (err, user) => {
    if (err) return done(err);
    if (!user) return done(null, false, { message: ‘Invalid username or password’ });
    // Compare passwords
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return done(err);
      if (!isMatch) return done(null, false, { message: ‘Invalid username or password’ });
      return done(null, user);
    });
  });
}));

// Set up routes
app.use(‘/admin’, require(‘./routes/admin’));
app.use(‘/users’, require(‘./routes/users’));
app.use(‘/tournaments’, require(‘./routes/tournaments’));
app.use(‘/games’, require(‘./routes/games’));
app.use(‘/payments’, require(‘./routes/payments’));

// Set up server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});