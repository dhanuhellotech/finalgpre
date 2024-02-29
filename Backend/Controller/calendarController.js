// controllers/calendarController.js
const Calendar = require('../Models/calendar');

// Controller for creating a new calendar event
exports.createCalendar = async (req, res) => {
  const { title, date, eventType, description } = req.body;

  try {
    const newCalendar = new Calendar({
      title,
      date,
      eventType,
      description,
    });

    await newCalendar.save();
    res.status(201).json(newCalendar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for updating a calendar event
exports.updateCalendar = async (req, res) => {
  const { id } = req.params;
  const { title, date, eventType, description } = req.body;

  try {
    const updatedCalendar = await Calendar.findByIdAndUpdate(
      id,
      { title, date, eventType, description },
      { new: true }
    );

    if (!updatedCalendar) {
      return res.status(404).json({ message: 'Calendar event not found' });
    }

    res.json(updatedCalendar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for deleting a calendar event
exports.deleteCalendar = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCalendar = await Calendar.findByIdAndDelete(id);

    if (!deletedCalendar) {
      return res.status(404).json({ message: 'Calendar event not found' });
    }

    res.json({ message: 'Calendar event deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.getCalendar = async (req, res) => {
  try {
    const calendarEvents = await Calendar.find();
    res.json(calendarEvents);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};