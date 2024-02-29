// models/Address.js
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
