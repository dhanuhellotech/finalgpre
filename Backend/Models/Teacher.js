// models/Teacher.js
const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  hobby: String,
  dateOfBirth: Date,
  degree: String,
  teachingGoal: String,
  imageUrl:  String,
  position: String,
  homeTown:String,
  
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
