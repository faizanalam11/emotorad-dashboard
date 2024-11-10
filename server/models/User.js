const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String },
  googleId: { type: String, unique: true },
});

module.exports = mongoose.model('User', UserSchema);
