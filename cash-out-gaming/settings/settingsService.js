import { Settings } from './settings';

const settingsService = {
  async getSettings() {
    return await Settings.find().exec();
  },

  async getSetting(id) {
    return await Settings.findById(id).exec();
  },

  async createSetting(name, value) {
    const settingDoc = new Settings({ name, value });
    return await settingDoc.save();
  },

  async updateSetting(id, name, value) {
    const settingDoc = await Settings.findById(id).exec();
    settingDoc.name = name;
    settingDoc.value = value;
    return await settingDoc.save();
  },

  async deleteSetting(id) {
    return await Settings.findByIdAndRemove(id).exec();
  },
};

export default settingsService;