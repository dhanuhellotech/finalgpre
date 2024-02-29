// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phoneNumber: Number,
  email: String, // Add the email field
  address: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
