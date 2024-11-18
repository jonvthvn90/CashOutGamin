import mongoose from 'mongoose';

const shippingSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  country: String,
});

const Shipping = mongoose.model('Shipping', shippingSchema);

export default Shipping;