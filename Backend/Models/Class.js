// models/Class.js

const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  gameName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  staffName: {
    type: String,
    required: true
  },
  imageUrl: String // Add imageUrl field for storing image URL
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
