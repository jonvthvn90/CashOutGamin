import mongoose from 'mongoose';

const shareSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  thread: { type: mongoose.Schema.Types.ObjectId, ref: 'Thread' },
});

const Share = mongoose.model('Share', shareSchema);

export default Share;