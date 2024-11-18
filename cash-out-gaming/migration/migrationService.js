import { Migration } from './migration';

const migrationService = {
  async getMigrations() {
    return await Migration.find().exec();
  },

  async getMigration(id) {
    return await Migration.findById(id).exec();
  },

  async createMigration(name, version) {
    const migrationDoc = new Migration({ name, version });
    return await migrationDoc.save();
  },

  async updateMigration(id, name, version) {
    const migrationDoc = await Migration.findById(id).exec();
    migrationDoc.name = name;
    migrationDoc.version = version;
    return await migrationDoc.save();
  },

  async deleteMigration(id) {
    return await Migration.findByIdAndRemove(id).exec();
  },
};

export default migrationService;