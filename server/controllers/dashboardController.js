const DashboardData = require('../models/DashboardData');

exports.addDashboardData = async (req, res) => {
  const { userId, data, charts } = req.body;

  try {
    const dashboardData = new DashboardData({
      userId,
      data,
      charts,
    });

    await dashboardData.save();
    res.status(200).json({ message: 'Dashboard data added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add data' });
  }
};

exports.getDashboardData = async (req, res) => {
  const { userId } = req.params;

  try {
    const dashboardData = await DashboardData.find({ userId });

    if (!dashboardData) {
      return res.status(404).json({ error: 'No data found for this user' });
    }

    res.status(200).json(dashboardData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
};
