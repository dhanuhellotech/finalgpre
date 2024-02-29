// routes/calendarRoutes.js
const express = require('express');
const router = express.Router();
const calendarController = require('../Controller/calendarController');

// Route for creating a new calendar event
router.post('/', calendarController.createCalendar);

// Route for updating a calendar event
router.put('/:id', calendarController.updateCalendar);

// Route for deleting a calendar event
router.delete('/:id', calendarController.deleteCalendar);
router.get('/', calendarController.getCalendar);

module.exports = router;
