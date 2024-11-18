import mongoose from 'mongoose';

const schedulingSchema = new mongoose.Schema({
  name: String,
  tasks: [{ type: String }],
});

const Scheduling = mongoose.model('Scheduling', schedulingSchema);

export default Scheduling;