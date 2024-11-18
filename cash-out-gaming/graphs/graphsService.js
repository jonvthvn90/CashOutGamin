import { Graphs } from './graphs';

const graphsService = {
  async getGraphs() {
    return await Graphs.find().exec();
  },

  async getGraph(id) {
    return await Graphs.findById(id).exec();
  },

  async createGraph(name, nodes, edges) {
    const graphDoc = new Graphs({ name, nodes, edges });
    return await graphDoc.save();
  },

  async updateGraph(id, name, nodes, edges) {
    const graphDoc = await Graphs.findById(id).exec();
    graphDoc.name = name;
    graphDoc.nodes = nodes;
    graphDoc.edges = edges;
    return await graphDoc.save();
  },

  async deleteGraph(id) {
    return await Graphs.findByIdAndRemove(id).exec();
  },
};

export default graphsService;