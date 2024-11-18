import { Share } from './share';

const shareService = {
  async getShares() {
    return await Share.find().exec();
  },

  async getShare(id) {
    return await Share.findById(id).exec();
  },

  async createShare(user, thread) {
    const shareDoc = new Share({ user, thread });
    return await shareDoc.save();
  },

  async updateShare(id, user, thread) {
    const shareDoc = await Share.findById(id).exec();
    shareDoc.user = user;
    shareDoc.thread = thread;
    return await shareDoc.save();
  },

  async deleteShare(id) {
    return await Share.findByIdAndRemove(id).exec();
  },
};

export default shareService;