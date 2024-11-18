import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  topicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
  title: String,
  content: String,
});

const Post = mongoose.model('Post', postSchema);

export default Post;