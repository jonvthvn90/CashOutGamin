import { Scheduling } from './scheduling';

const schedulingService = {
  async getSchedulings() {
    return await Scheduling.find().exec();
  },

  async getScheduling(id) {
    return await Scheduling.findById(id).exec();
  },

  async createScheduling(name, tasks) {
    const schedulingDoc = new Scheduling({ name, tasks });
    return await schedulingDoc.save();
  },

  async updateScheduling(id, name, tasks) {
    const schedulingDoc = await Scheduling.findById(id).exec();
    schedulingDoc.name = name;
    schedulingDoc.tasks = tasks;
    return await schedulingDoc.save();
  },

  async deleteScheduling(id) {
    return await Scheduling.findByIdAndRemove(id).exec();
  },
};

export default schedulingService;