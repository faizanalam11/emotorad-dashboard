const mongoose = require('mongoose');

const DashboardDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  data: { type: Array, required: true },
  charts: { type: Array, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('DashboardData', DashboardDataSchema);
