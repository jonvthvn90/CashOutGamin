import { Preferences } from './preferences';

const deploymentService = {
  async getPreferences() {
    return await Preferences.find().exec();
  },

  async getPreference(id) {
    return await Preferences.findById(id).exec();
  },

  async createPreference(name, value) {
    const preferenceDoc = new Preferences({ name, value });
    return await preferenceDoc.save();
  },

  async updatePreference(id, name, value) {
    const preferenceDoc = await Preferences.findById(id).exec();
    preferenceDoc.name = name;
    preferenceDoc.value = value;
    return await preferenceDoc.save();
  },

  async deletePreference(id) {
    return await Preferences.findByIdAndRemove(id).exec();
  },
};

export default deploymentService;