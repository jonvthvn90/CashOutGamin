import { Environment } from './environment';

const environmentService = {
  async getEnvironments() {
    return await Environment.find().exec();
  },

  async getEnvironment(id) {
    return await Environment.findById(id).exec();
  },

  async createEnvironment(name, variables) {
    const environmentDoc = new Environment({ name, variables });
    return await environmentDoc.save();
  },

  async updateEnvironment(id, name, variables) {
    const environmentDoc = await Environment.findById(id).exec();
    environmentDoc.name = name;
    environmentDoc.variables = variables;
    return await environmentDoc.save();
  },

  async deleteEnvironment(id) {
    return await Environment.findByIdAndRemove(id).exec();
  },
};

export default environmentService;