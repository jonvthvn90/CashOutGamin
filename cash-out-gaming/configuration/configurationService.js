import { Configuration } from './configuration';

const configurationService = {
  async getConfigurations() {
    return await Configuration.find().exec();
  },

  async getConfiguration(id) {
    return await Configuration.findById(id).exec();
  },

  async createConfiguration(name, settings) {
    const configurationDoc = new Configuration({ name, settings });
    return await configurationDoc.save();
  },

  async updateConfiguration(id, name, settings) {
    const configurationDoc = await Configuration.findById(id).exec();
    configurationDoc.name = name;
    configurationDoc.settings = settings;
    return await configurationDoc.save();
  },

  async deleteConfiguration(id) {
    return await Configuration.findByIdAndRemove(id).exec();
  },
};

export default configurationService;