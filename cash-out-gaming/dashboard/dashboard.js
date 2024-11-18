import mongoose from 'mongoose';

const dashboardSchema = new mongoose.Schema({
  name: String,
  widgets: [{ type: String }],
});

const Dashboard = mongoose.model('Dashboard', dashboardSchema);

export default Dashboard;