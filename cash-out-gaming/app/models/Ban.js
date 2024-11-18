const mongoose = require('mongoose');

const banSchema = new mongoose.Schema({
  gameId: String
});

const Ban = mongoose.model('Ban', banSchema);

module.exports = Ban;