const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  username: String,
  email: String,
  mobile: String,
  Address: String,
  state: String,
  childname: String,
  childgrade: String,
  message: String,
});

const Addmission = mongoose.model('enquiry', enquirySchema);

// Correct export statement
module.exports = { Addmission };
