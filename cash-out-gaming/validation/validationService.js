import { Validation } from './validation';

const validationService = {
  async getValidations() {
    return await Validation.find().exec();
  },

  async getValidation(id) {
    return await Validation.findById(id).exec();
  },

  async createValidation(name, rules) {
    const validationDoc = new Validation({ name, rules });
    return await validationDoc.save();
  },

  async updateValidation(id, name, rules) {
    const validationDoc = await Validation.findById(id).exec();
    validationDoc.name = name;
    validationDoc.rules = rules;
    return await validationDoc.save();
  },

  async deleteValidation(id) {
    return await Validation.findByIdAndRemove(id).exec();
  },
};

export default validationService;