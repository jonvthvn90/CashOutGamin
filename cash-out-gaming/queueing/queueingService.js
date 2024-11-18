import { Queueing } from './queueing';

const queueingService = {
  async getQueueings() {
    return await Queueing.find().exec();
  },

  async getQueueing(id) {
    return await Queueing.findById(id).exec();
  },

  async createQueueing(name, tasks) {
    const queueingDoc = new Queueing({ name, tasks });
    return await queueingDoc.save();
  },

  async updateQueueing(id, name, tasks) {
    const queueingDoc = await Queueing.findById(id).exec();
    queueingDoc.name = name;
    queueingDoc.tasks = tasks;
    return await queueingDoc.save();
  },

  async deleteQueueing(id) {
    return await Queueing.findByIdAndRemove(id).exec();
  },
};

export default queueingService;