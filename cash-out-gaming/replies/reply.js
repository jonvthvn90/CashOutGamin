import mongoose from 'mongoose';

const replySchema = new mongoose.Schema({
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  comment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
});

const Reply = mongoose.model('Reply', replySchema);

export default Reply;