// models/Newsletter.js

const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
newsletterSchema.methods.updateFilename = async function(newFilename) {
  try {
    this.filename = newFilename;
    await this.save();
    return this;
  } catch (error) {
    throw error;
  }
};
const Newsletter = mongoose.model('Newsletter', newsletterSchema);

module.exports = Newsletter;
