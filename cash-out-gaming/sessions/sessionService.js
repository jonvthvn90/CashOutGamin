import { Session } from './session';

const sessionService = {
  async getSessions() {
    return await Session.find().exec();
  },

  async getSession(id) {
    return await Session.findById(id).exec();
  },

  async createSession(user, expiresAt) {
    const sessionDoc = new Session({ user, expiresAt });
    return await sessionDoc.save();
  },

  async updateSession(id, user, expiresAt) {
    const sessionDoc = await Session.findById(id).exec();
    sessionDoc.user = user;
    sessionDoc.expiresAt = expiresAt;
    return await sessionDoc.save();
  },

  async deleteSession(id) {
    return await Session.findByIdAndRemove(id).exec();
  },
};

export default sessionService;