import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  message: String,
  read: Boolean,
});

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;