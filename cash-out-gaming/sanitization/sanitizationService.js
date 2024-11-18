import { Sanitization } from './sanitization';

const sanitizationService = {
  async getSanitizations() {
    return await Sanitization.find().exec();
  },

  async getSanitization(id) {
    return await Sanitization.findById(id).exec();
  },

  async createSanitization(name, rules) {
    const sanitizationDoc = new Sanitization({ name, rules });
    return await sanitizationDoc.save();
  },

  async updateSanitization(id, name, rules) {
    const sanitizationDoc = await Sanitization.findById(id).exec();
    sanitizationDoc.name = name;
    sanitizationDoc.rules = rules;
    return await sanitizationDoc.save();
  },

  async deleteSanitization(id) {
    return await Sanitization.findByIdAndRemove(id).exec();
  },
};

export default sanitizationService;