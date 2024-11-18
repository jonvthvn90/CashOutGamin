import mongoose from 'mongoose';

const graphsSchema = new mongoose.Schema({
  name: String,
  nodes: [{ type: String }],
  edges: [{ type: String }],
});

const Graphs = mongoose.model('Graphs', graphsSchema);

export default Graphs;