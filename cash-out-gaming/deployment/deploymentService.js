import { Deployment } from './deployment';

const deploymentService = {
  async getDeployments() {
    return await Deployment.find().exec();
  },

  async getDeployment(id) {
    return await Deployment.findById(id).exec();
  },

  async createDeployment(name, version) {
    const deploymentDoc = new Deployment({ name, version });
    return await deploymentDoc.save();
  },

  async updateDeployment(id, name, version) {
    const deploymentDoc = await Deployment.findById(id).exec();
    deploymentDoc.name = name;
    deploymentDoc.version = version;
    return await deploymentDoc.save();
  },

  async deleteDeployment(id) {
    return await Deployment.findByIdAndRemove(id).exec();
  },
};

export default deploymentService;