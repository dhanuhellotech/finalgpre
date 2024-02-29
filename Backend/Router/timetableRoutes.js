// routes/timetableRoutes.js

const express = require('express');
const router = express.Router();
const timetableController = require('../Controller/timetableController');

// Route to add a new timetable entry
router.post('/timetable', timetableController.addTimetableEntry);
router.get('/getAll', timetableController.getAllTimetableEntries);
// Edit a timetable entry
router.put('/edit/:id', timetableController.editTimetableEntry);

// Delete a timetable entry
router.delete('/delete/:id', timetableController.deleteTimetableEntry);
module.exports = router;
