const mongoose = require('mongoose');

// Schema to store subject details for each day
const subjectSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

// Schema for the timetable
const timetableSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  // Reference to the subject schema to store subject details for each day
  subjects: [subjectSchema]  
});

// Model for the timetable
const Timetable = mongoose.model('Timetable', timetableSchema);

module.exports = Timetable;
