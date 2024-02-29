const express = require('express');
const eventController = require('../Controller/eventController');

const router = express.Router();
const multer =require('multer')
// Route to create a new event
// router.post('/create', eventController.uploadImage,eventController.addEvent);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Specify the destination folder for storing the uploaded files
      cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
      // Specify how the file should be named
      cb(null, Date.now() + '-' + file.originalname);
    }
  });

  const upload = multer({ storage });
// Route to create a new event
router.post('/create',upload.single('image'), eventController.addEvent, eventController.uploadImage,async (req, res) => {
  try {
    // Save the event details in the database and send the response
    const eventData = {
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.file.filename,
      category: req.body.category,
      image: req.file.buffer, // Include the image buffer in the eventData
    };

    // Save eventData to the database (you need to implement this)

    res.json(eventData);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to get all events
router.get('/getAll', eventController.getAllEvents);

// Route to delete an event by ID
router.delete('/delete/:id', eventController.deleteEvent);
// Route to get events by category
router.get('/getByCategory/:category', eventController.getEventsByCategory);
module.exports = router;
