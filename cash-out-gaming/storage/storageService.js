import { Storage } from './storage';

const storageService = {
  async getStorage() {
    return await Storage.find().exec();
  },

  async getStorageItem(id) {
    return await Storage.findById(id).exec();
  },

  async createStorageItem(name, data) {
    const storageDoc = new Storage({ name, data });
    return await storageDoc.save();
  },

  async updateStorageItem(id, name, data) {
    const storageDoc = await Storage.findById(id).exec();
    storageDoc.name = name;
    storageDoc.data = data;
    return await storageDoc.save();
  },

  async deleteStorageItem(id) {
    return await Storage.findByIdAndRemove(id).exec();
  },
};

export default storageService;