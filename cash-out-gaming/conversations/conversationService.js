import { Conversation } from './conversation';

const conversationService = {
  async getConversations() {
    return await Conversation.find().exec();
  },

  async getConversation(id) {
    return await Conversation.findById(id).exec();
  },

  async createConversation(participants) {
    const conversationDoc = new Conversation({ participants });
    return await conversationDoc.save();
  },

  async updateConversation(id, participants) {
    const conversationDoc = await Conversation.findById(id).exec();
    conversationDoc.participants = participants;
    return await conversationDoc.save();
  },

  async deleteConversation(id) {
    return await Conversation.findByIdAndRemove(id).exec();
  },
};

export default conversationService;