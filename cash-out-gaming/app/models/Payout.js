const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PayoutSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  payoutDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'processed', 'failed'],
    default: 'pending',
  },
});

PayoutSchema.methods.processPayout = async function () {
  // Process payout logic here
  this.status = 'processed';
  await this.save();
};

PayoutSchema.methods.failPayout = async function () {
  // Fail payout logic here
  this.status = 'failed';
  await this.save();
};

const Payout = mongoose.model('Payout', PayoutSchema);

module.exports = Payout;