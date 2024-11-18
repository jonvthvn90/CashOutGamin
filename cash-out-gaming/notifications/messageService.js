import { Message } from './message';

const messageService = {
  async getMessages() {
    return await Message.find().exec();
  },

  async getMessage(id) {
    return await Message.findById(id).exec();
  },

  async createMessage(text, senderId, recipientId) {
    const messageDoc = new Message({ text, senderId, recipientId });
    return await messageDoc.save();
  },

  async updateMessage(id, text, senderId, recipientId) {
    const messageDoc = await Message.findById(id).exec();
    messageDoc.text = text;
    messageDoc.senderId = senderId;
    messageDoc.recipientId = recipientId;
    return await messageDoc.save();
  },

  async deleteMessage(id) {
    return await Message.findByIdAndRemove(id).exec();
  },
};

export default messageService;