import { Comment } from './comment';

const commentService = {
  async getComments() {
    return await Comment.find().exec();
  },

  async getComment(id) {
    return await Comment.findById(id).exec();
  },

  async createComment(content, author, thread) {
    const commentDoc = new Comment({ content, author, thread });
    return await commentDoc.save();
  },

  async updateComment(id, content, author, thread) {
    const commentDoc = await Comment.findById(id).exec();
    commentDoc.content = content;
    commentDoc.author = author;
    commentDoc.thread = thread;
    return await commentDoc.save();
  },

  async deleteComment(id) {
    return await Comment.findByIdAndRemove(id).exec();
  },
};

export default commentService;