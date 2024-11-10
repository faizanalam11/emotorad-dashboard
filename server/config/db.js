const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error', err));
  } catch (err) {
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
