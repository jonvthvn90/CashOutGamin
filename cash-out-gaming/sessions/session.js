import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  expiresAt: Date,
});

const Session = mongoose.model('Session', sessionSchema);

export default Session;