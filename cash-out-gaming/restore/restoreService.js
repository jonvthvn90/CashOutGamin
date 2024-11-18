import { Restore } from './restore';

const restoreService = {
  async getRestores() {
    return await Restore.find().exec();
  },

  async getRestore(id) {
    return await Restore.findById(id).exec();
  },

  async createRestore(name, data) {
    const restoreDoc = new Restore({ name, data });
    return await restoreDoc.save();
  },

  async updateRestore(id, name, data) {
    const restoreDoc = await Restore.findById(id).exec();
    restoreDoc.name = name;
    restoreDoc.data = data;
    return await restoreDoc.save();
  },

  async deleteRestore(id) {
    return await Restore.findByIdAndRemove(id).exec();
  },
};

export default restoreService;