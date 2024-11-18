import { Normalization } from './normalization';

const normalizationService = {
  async getNormalizations() {
    return await Normalization.find().exec();
  },

  async getNormalization(id) {
    return await Normalization.findById(id).exec();
  },

  async createNormalization(name, rules) {
    const normalizationDoc = new Normalization({ name, rules });
    return await normalizationDoc.save();
  },

  async updateNormalization(id, name, rules) {
    const normalizationDoc = await Normalization.findById(id).exec();
    normalizationDoc.name = name;
    normalizationDoc.rules = rules;
    return await normalizationDoc.save();
  },

  async deleteNormalization(id) {
    return await Normalization.findByIdAndRemove(id).exec();
  },
};

export default normalizationService;