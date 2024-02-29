// controllers/timetableController.js

const Timetable = require('../Models/Timetable');

// Controller to add a new timetable entry
exports.addTimetableEntry = async (req, res) => {
  try {
    const { day, date, subjects } = req.body;
    const timetableEntry = new Timetable({
      day,
      date,
      subjects
    });
    await timetableEntry.save();
    res.status(201).json({ message: 'Timetable entry added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
// Controller to get all timetable entries
exports.getAllTimetableEntries = async (req, res) => {
    try {
      const timetableEntries = await Timetable.find();
      res.status(200).json(timetableEntries);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  // Controller to edit a timetable entry
  exports.editTimetableEntry = async (req, res) => {
    try {
      const { id } = req.params;
      const { day, date, subjects } = req.body;
      const updatedEntry = await Timetable.findByIdAndUpdate(id, { day, date, subjects });
      res.status(200).json({ message: 'Timetable entry updated successfully', updatedEntry });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  // Controller to delete a timetable entry
  exports.deleteTimetableEntry = async (req, res) => {
    try {
      const { id } = req.params;
      await Timetable.findByIdAndDelete(id);
      res.status(200).json({ message: 'Timetable entry deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };