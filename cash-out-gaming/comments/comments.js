import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  thread: { type: mongoose.Schema.Types.ObjectId, ref: 'Thread' },
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;