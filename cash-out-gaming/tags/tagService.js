import { Tag } from './tag';

const tagService = {
  async getTags() {
    return await Tag.find().exec();
  },

  async getTag(id) {
    return await Tag.findById(id).exec();
  },

  async createTag(name, threads) {
    const tagDoc = new Tag({ name, threads });
    return await tagDoc.save();
  },

  async updateTag(id, name, threads) {
    const tagDoc = await Tag.findById(id).exec();
    tagDoc.name = name;
    tagDoc.threads = threads;
    return await tagDoc.save();
  },

  async deleteTag(id) {
    return await Tag.findByIdAndRemove(id).exec();
  },
};

export default tagService;