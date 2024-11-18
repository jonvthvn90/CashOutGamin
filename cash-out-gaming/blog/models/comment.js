import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  articleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' },
  content: String,
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;