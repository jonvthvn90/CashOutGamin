const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  balance: Number,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;