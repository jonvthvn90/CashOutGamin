import { Security } from './security';

const securityService = {
  async getSecurities() {
    return await Security.find().exec();
  },

  async getSecurity(id) {
    return await Security.findById(id).exec();
  },

  async createSecurity(name, rules) {
    const securityDoc = new Security({ name, rules });
    return await securityDoc.save();
  },

  async updateSecurity(id, name, rules) {
    const securityDoc = await Security.findById(id).exec();
    securityDoc.name = name;
    securityDoc.rules = rules;
    return await securityDoc.save();
  },

  async deleteSecurity(id) {
    return await Security.findByIdAndRemove(id).exec();
  },
};

export default securityService;