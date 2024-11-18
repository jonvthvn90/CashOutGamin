import { Order } from './order';

const orderService = {
  async getOrders() {
    return await Order.find().exec();
  },

  async getOrder(id) {
    return await Order.findById(id).exec();
  },

  async createOrder(customerName, orderDate, total, status) {
    const order = new Order({ customerName, orderDate, total, status });
    return await order.save();
  },

  async updateOrder(id, customerName, orderDate, total, status) {
    const order = await Order.findById(id).exec();
    order.customerName = customerName;
    order.orderDate = orderDate;
    order.total = total;
    order.status = status;
    return await order.save();
  },

  async deleteOrder(id) {
    return await Order.findByIdAndRemove(id).exec();
  },
};

export default orderService;