import { Reply } from './reply';

const replyService = {
  async getReplies() {
    return await Reply.find().exec();
  },

  async getReply(id) {
    return await Reply.findById(id).exec();
  },

  async createReply(content, author, comment) {
    const replyDoc = new Reply({ content, author, comment });
    return await replyDoc.save();
  },

  async updateReply(id, content, author, comment) {
    const replyDoc = await Reply.findById(id).exec();
    replyDoc.content = content;
    replyDoc.author = author;
    replyDoc.comment = comment;
    return await replyDoc.save();
  },

  async deleteReply(id) {
    return await Reply.findByIdAndRemove(id).exec();
  },
};

export default replyService;