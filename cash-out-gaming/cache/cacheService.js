import { Cache } from './cache';

const cacheService = {
  async getCache() {
    return await Cache.find().exec();
  },

  async getCacheItem(key) {
    return await Cache.findOne({ key }).exec();
  },

  async createCacheItem(key, value) {
    const cacheDoc = new Cache({ key, value });
    return await cacheDoc.save();
  },

  async updateCacheItem(key, value) {
    const cacheDoc = await Cache.findOne({ key }).exec();
    cacheDoc.value = value;
    return await cacheDoc.save();
  },

  async deleteCacheItem(key) {
    return await Cache.findOneAndRemove({ key }).exec();
  },
};

export default cacheService;