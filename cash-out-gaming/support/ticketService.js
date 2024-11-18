import { Ticket } from './ticket';

const ticketService = {
  async getTickets() {
    return await Ticket.find().exec();
  },

  async getTicket(id) {
    return await Ticket.findById(id).exec();
  },

  async createTicket(title, description, status, priority, assignedTo) {
    const ticket = new Ticket({ title, description, status, priority, assignedTo });
    return await ticket.save();
  },

  async updateTicket(id, title, description, status, priority, assignedTo) {
    const ticket = await Ticket.findById(id).exec();
    ticket.title = title;
    ticket.description = description;
    ticket.status = status;
    ticket.priority = priority;
    ticket.assignedTo = assignedTo;
    return await ticket.save();
  },

  async deleteTicket(id) {
    return await Ticket.findByIdAndRemove(id).exec();
  },
};

export default ticketService;