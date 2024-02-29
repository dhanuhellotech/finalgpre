//modal 
const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  eventType: { type: String, enum: ['Important Day', 'Calendar'], default: 'Calendar' },
  description: String,
});

module.exports = mongoose.model('Calendar', calendarSchema);
