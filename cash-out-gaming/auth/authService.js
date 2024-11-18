import { Auth } from './auth';

const authService = {
  async getAuths() {
    return await Auth.find().exec();
  },

  async getAuth(id) {
    return await Auth.findById(id).exec();
  },

  async createAuth(token, user) {
    const authDoc = new Auth({ token, user });
    return await authDoc.save();
  },

  async updateAuth(id, token, user) {
    const authDoc = await Auth.findById(id).exec();
    authDoc.token = token;
    authDoc.user = user;
    return await authDoc.save();
  },

  async deleteAuth(id) {
    return await Auth.findByIdAndRemove(id).exec();
  },
};

export default authService;