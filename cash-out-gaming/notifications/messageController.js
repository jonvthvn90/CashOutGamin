import express from 'express';
import { messageService } from './messageService';

const router = express.Router();

router.get('/messages', async (req, res) => {
  const messages = await messageService.getMessages();
  res.json(messages);
});

router.get('/messages/:id', async (req, res) => {
  const messageDoc = await messageService.getMessage(req.params.id);
  res.json(messageDoc);
});

router.post('/messages', async (req, res) => {
  const { text, senderId, recipientId } = req.body;
  const messageDoc = await messageService.createMessage(text, senderId, recipientId);
  res.json(messageDoc);
});

router.put('/messages/:id', async (req, res) => {
  const { text, senderId, recipientId } = req.body;
  const messageDoc = await messageService.updateMessage(req.params.id, text, senderId, recipientId);
  res.json(messageDoc);
});

router.delete('/messages/:id', async (req, res) => {
  await messageService.deleteMessage(req.params.id);
  res.json({ message: 'Message deleted successfully' });
});

export default router;