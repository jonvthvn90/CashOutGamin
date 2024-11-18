import express from 'express';
import { ticketService } from './ticketService';

const router = express.Router();

router.get('/tickets', async (req, res) => {
  const tickets = await ticketService.getTickets();
  res.json(tickets);
});

router.get('/tickets/:id', async (req, res) => {
  const ticket = await ticketService.getTicket(req.params.id);
  res.json(ticket);
});

router.post('/tickets', async (req, res) => {
  const { title, description, status, priority, assignedTo } = req.body;
  const ticket = await ticketService.createTicket(title, description, status, priority, assignedTo);
  res.json(ticket);
});

router.put('/tickets/:id', async (req, res) => {
  const { title, description, status, priority, assignedTo } = req.body;
  const ticket = await ticketService.updateTicket(req.params.id, title, description, status, priority, assignedTo);
  res.json(ticket);
});

router.delete('/tickets/:id', async (req, res) => {
  await ticketService.deleteTicket(req.params.id);
  res.json({ message: 'Ticket deleted successfully' });
});

export default router;