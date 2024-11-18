import { Shipping } from './shipping';

const shippingService = {
  async getShippings() {
    return await Shipping.find().exec();
  },

  async getShipping(id) {
    return await Shipping.findById(id).exec();
  },

  async createShipping(name, address, city, state, zip, country) {
    const shipping = new Shipping({ name, address, city, state, zip, country });
    return await shipping.save();
  },

  async updateShipping(id, name, address, city, state, zip, country) {
    const shipping = await Shipping.findById(id).exec();
    shipping.name = name;
    shipping.address = address;
    shipping.city = city;
    shipping.state = state;
    shipping.zip = zip;
    shipping.country = country;
    return await shipping.save();
  },

  async deleteShipping(id) {
    return await Shipping.findByIdAndRemove(id).exec();
  },
};

export default shippingService;