import { Caching } from './caching';

const cachingService = {
  async getCachings() {
    return await Caching.find().exec();
  },

  async getCaching(id) {
    return await Caching.findById(id).exec();
  },

  async createCaching(name, rules) {
    const cachingDoc = new Caching({ name, rules });
    return await cachingDoc.save();
  },

  async updateCaching(id, name, rules) {
    const cachingDoc = await Caching.findById(id).exec();
    cachingDoc.name = name;
    cachingDoc.rules = rules;
    return await cachingDoc.save();
  },

  async deleteCaching(id) {
    return await Caching.findByIdAndRemove(id).exec();
  },
};

export default cachingService;