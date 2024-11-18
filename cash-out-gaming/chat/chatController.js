import express from 'express';
import { chatService } from './chatService';

const router = express.Router();

router.post('/join', (req, res) => {
  const { username } = req.body;
  chatService.joinChat(username);
  res.send(`Joined chat as ${username}`);
});

router.post('/message', (req, res) => {
  const { message } = req.body;
  chatService.sendMessage(message);
  res.send(`Sent message: ${message}`);
});

router.post('/leave', (req, res) => {
  const { username } = req.body;
  chatService.leaveChat(username);
  res.send(`Left chat as ${username}`);
});

export default router;