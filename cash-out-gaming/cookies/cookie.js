import mongoose from 'mongoose';

const cookieSchema = new mongoose.Schema({
  name: String,
  value: String,
});

const Cookie = mongoose.model('Cookie', cookieSchema);

export default Cookie;