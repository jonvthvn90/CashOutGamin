import mongoose from 'mongoose';

const threadSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Thread = mongoose.model('Thread', threadSchema);

export default Thread;