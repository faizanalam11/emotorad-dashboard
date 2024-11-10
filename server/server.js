const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jwt-simple');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// Initialize Google OAuth2 Client
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = 'https://emotorad-dashboard-impr.onrender.com/oauth2callback'; 
const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Google OAuth Route
app.get('/auth/google', (req, res) => {
  const redirectUri = req.query.redirect_uri || 'https://emotorad-dashboard-one.vercel.app/dashboard'; // Default to dashboard
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
    state: redirectUri,  // Pass the intended redirect URI in the state
  });

  res.redirect(url); // Redirect user to Google OAuth page
});

// Callback route after Google authentication
app.get('/oauth2callback', async (req, res) => {
  const code = req.query.code;
  const redirectUri = req.query.state || 'https://emotorad-dashboard-one.vercel.app/dashboard'; // Default to dashboard if no state provided

  try {
    // Exchange code for tokens
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Fetch user info using access token
    const userInfo = await oauth2Client.request({
      url: 'https://www.googleapis.com/oauth2/v2/userinfo',
    });

    // Generate JWT for your user (you can include user details in the payload)
    const jwtToken = jwt.encode(
      { userId: userInfo.data.id, email: userInfo.data.email },
      process.env.JWT_SECRET
    );

    // Redirect user to the intended page with JWT as query parameter
    res.redirect(`${redirectUri}?jwt=${jwtToken}`);
  } catch (error) {
    res.status(400).send('Error during Google authentication');
  }
});

// Use routes for your app (already in place)
app.use('/auth', require('./routes/authRoutes'));
app.use('/dashboard', require('./routes/dashboardRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
