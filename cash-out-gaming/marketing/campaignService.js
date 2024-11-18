import { Campaign } from './campaign';

const campaignService = {
  async getCampaigns() {
    return await Campaign.find().exec();
  },

  async getCampaign(id) {
    return await Campaign.findById(id).exec();
  },

  async createCampaign(name, description, startDate, endDate, budget) {
    const campaign = new Campaign({ name, description, startDate, endDate, budget });
    return await campaign.save();
  },

  async updateCampaign(id, name, description, startDate, endDate, budget) {
    const campaign = await Campaign.findById(id).exec();
    campaign.name = name;
    campaign.description = description;
    campaign.startDate = startDate;
    campaign.endDate = endDate;
    campaign.budget = budget;
    return await campaign.save();
  },

  async deleteCampaign(id) {
    return await Campaign.findByIdAndRemove(id).exec();
  },
};

export default campaignService;