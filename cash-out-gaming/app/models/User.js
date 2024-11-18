const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  games: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;