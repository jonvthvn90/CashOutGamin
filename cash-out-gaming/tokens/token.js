import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({
  token: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Token = mongoose.model('Token', tokenSchema);

export default Token;