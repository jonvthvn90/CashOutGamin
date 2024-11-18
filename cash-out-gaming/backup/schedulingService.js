import { Backup } from './backup';

const schedulingService = {
  async getBackups() {
    return await Backup.find().exec();
  },

  async getBackup(id) {
    return await Backup.findById(id).exec();
  },

  async createBackup(name, data) {
    const backupDoc = new Backup({ name, data });
    return await backupDoc.save();
  },

  async updateBackup(id, name, data) {
    const backupDoc = await Backup.findById(id).exec();
    backupDoc.name = name;
    backupDoc.data = data;
    return await backupDoc.save();
  },

  async deleteBackup(id) {
    return await Backup.findByIdAndRemove(id).exec();
  },
};

export default schedulingService;