import { Thread } from './thread';

const threadService = {
  async getThreads() {
    return await Thread.find().exec();
  },

  async getThread(id) {
    return await Thread.findById(id).exec();
  },

  async createThread(title, content, author) {
    const threadDoc = new Thread({ title, content, author });
    return await threadDoc.save();
  },

  async updateThread(id, title, content, author) {
    const threadDoc = await Thread.findById(id).exec();
    threadDoc.title = title;
    threadDoc.content = content;
    threadDoc.author = author;
    return await threadDoc.save();
  },

  async deleteThread(id) {
    return await Thread.findByIdAndRemove(id).exec();
  },
};

export default threadService;