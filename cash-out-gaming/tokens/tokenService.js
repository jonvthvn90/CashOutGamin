import { Token } from './token';

const tokenService = {
  async getTokens() {
    return await Token.find().exec();
  },

  async getToken(id) {
    return await Token.findById(id).exec();
  },

  async createToken(token, user) {
    const tokenDoc = new Token({ token, user });
    return await tokenDoc.save();
  },

  async updateToken(id, token, user) {
    const tokenDoc = await Token.findById(id).exec();
    tokenDoc.token = token;
    tokenDoc.user = user;
    return await tokenDoc.save();
  },

  async deleteToken(id) {
    return await Token.findByIdAndRemove(id).exec();
  },
};

export default tokenService;