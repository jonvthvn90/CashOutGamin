import mongoose from 'mongoose';

const widgetsSchema = new mongoose.Schema({
  name: String,
  type: String,
  data: [{ type: String }],
});

const Widgets = mongoose.model('Widgets', widgetsSchema);

export default Widgets;