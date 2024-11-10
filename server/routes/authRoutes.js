const express = require('express');
const router = express.Router();
const { googleLogin } = require('../controllers/authController');

router.post('/google', googleLogin);  // Route for Google OAuth login

module.exports = router;