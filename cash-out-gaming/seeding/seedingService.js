import { Seeding } from './seeding';

const seedingService = {
  async getSeedings() {
    return await Seeding.find().exec();
  },

  async getSeeding(id) {
    return await Seeding.findById(id).exec();
  },

  async createSeeding(name, data) {
    const seedingDoc = new Seeding({ name, data });
    return await seedingDoc.save();
  },

  async updateSeeding(id, name, data) {
    const seedingDoc = await Seeding.findById(id).exec();
    seedingDoc.name = name;
    seedingDoc.data = data;
    return await seedingDoc.save();
  },

  async deleteSeeding(id) {
    return await Seeding.findByIdAndRemove(id).exec();
  },
};

export default seedingService;