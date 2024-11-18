import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  priority: String,
  assignedTo: String,
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;