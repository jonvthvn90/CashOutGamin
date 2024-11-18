import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  thread: { type: mongoose.Schema.Types.ObjectId, ref: 'Thread' },
});

const Like = mongoose.model('Like', likeSchema);

export default Like;