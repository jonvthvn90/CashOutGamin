import { io } from './socket.io';

const chatService = {
  async joinChat(username) {
    io.emit('join', username);
  },

  async sendMessage(message) {
    io.emit('message', message);
  },

  async leaveChat(username) {
    io.emit('leave', username);
  },
};

export default chatService;