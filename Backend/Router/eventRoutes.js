const express = require('express');
const eventController = require('../Controller/eventController');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Move the uploadImage middleware to the router
router.post('/create', upload.single('image'), eventController.addEvent, async (req, res) => {
  // Route handling logic
});

router.get('/getAll', eventController.getAllEvents);
router.delete('/delete/:id', eventController.deleteEvent);
router.get('/getByCategory/:category', eventController.getEventsByCategory);

module.exports = router;
