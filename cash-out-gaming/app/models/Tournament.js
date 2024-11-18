const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
  category: String,
  startDate: Date,
  endDate: Date,
});

const Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;