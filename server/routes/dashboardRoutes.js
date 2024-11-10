const express = require('express');
const router = express.Router();
const { addDashboardData, getDashboardData } = require('../controllers/dashboardController');
const { verifyToken } = require('../middlewares/authMiddleware');

router.post('/add', verifyToken, addDashboardData);  // Route to add user dashboard data
router.get('/:userId', verifyToken, getDashboardData);  // Route to get user-specific dashboard data

module.exports = router;
