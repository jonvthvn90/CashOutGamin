import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema({
  name: String,
  threads: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thread' }],
});

const Tag = mongoose.model('Tag', tagSchema);

export default Tag;