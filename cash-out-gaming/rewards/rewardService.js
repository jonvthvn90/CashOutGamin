import { Reward } from './reward';

const rewardService = {
  async getRewards() {
    return await Reward.find().exec();
  },

  async getReward(id) {
    return await Reward.findById(id).exec();
  },

  async createReward(name, description, points) {
    const rewardDoc = new Reward({ name, description, points });
    return await rewardDoc.save();
  },

  async updateReward(id, name, description, points) {
    const rewardDoc = await Reward.findById(id).exec();
    rewardDoc.name = name;
    rewardDoc.description = description;
    rewardDoc.points = points;
    return await rewardDoc.save();
  },

  async deleteReward(id) {
    return await Reward.findByIdAndRemove(id).exec();
  },
};

export default rewardService;