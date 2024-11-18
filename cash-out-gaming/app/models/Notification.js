const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  gameId: String,
  message: String
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;