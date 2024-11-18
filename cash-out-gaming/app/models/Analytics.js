const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  gameId: String,
  event: String
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

module.exports = Analytics;