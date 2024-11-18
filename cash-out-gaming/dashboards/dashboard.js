import mongoose from 'mongoose';

const dashboardSchema = new mongoose.Schema({
  name: String,
  data: Object,
});

const Dashboard = mongoose.model('Dashboard', dashboardSchema);

export default Dashboard;