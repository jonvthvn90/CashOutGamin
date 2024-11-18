const mongoose = require('mongoose');

const moderationSchema = new mongoose.Schema({
  gameId: String,
  action: String
});

const Moderation = mongoose.model('Moderation', moderationSchema);

module.exports = Moderation;