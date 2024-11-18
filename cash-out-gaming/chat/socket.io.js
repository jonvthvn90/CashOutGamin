import { Server } from 'socket.io';

const io = new Server();

const users = {};

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('join', (username) => {
    users[username] = socket.id;
    console.log(`${username} joined the chat`);
  });

  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

export default io;