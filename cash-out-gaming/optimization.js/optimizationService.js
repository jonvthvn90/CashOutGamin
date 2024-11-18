import { Optimization } from './optimization';

const optimizationService = {
  async getOptimizations() {
    return await Optimization.find().exec();
  },

  async getOptimization(id) {
    return await Optimization.findById(id).exec();
  },

  async createOptimization(name, rules) {
    const optimizationDoc = new Optimization({ name, rules });
    return await optimizationDoc.save();
  },

  async updateOptimization(id, name, rules) {
    const optimizationDoc = await Optimization.findById(id).exec();
    optimizationDoc.name = name;
    optimizationDoc.rules = rules;
    return await optimizationDoc.save();
  },

  async deleteOptimization(id) {
    return await Optimization.findByIdAndRemove(id).exec();
  },
};

export default optimizationService;