const express = require('express');
const router = express.Router();
const teacherController = require('../Controller/teacherController');
const multer = require('multer');

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the destination folder for storing the uploaded files
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    // Specify how the file should be named
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Define your teacher routes here
router.get('/', teacherController.getAllTeachers);
router.put('/:id', upload.single('image'), teacherController.updateTeacher);
// router.post('/', upload.single('image'), teacherController.createTeacher,teacherController.uploadImage);
router.post('/', upload.single('image'), teacherController.createTeacher, async (req, res) => {
    try {
      // Save the event details in the database and send the response
      const teacherData = {
        name: req.body.name,
        about: req.body.about,
        hobby: req.body.hobby,
        dateOfBirth: req.body.dateOfBirth,
        degree: req.body.degree,
        teachingGoal: req.body.teachingGoal,
         position: req.body.position,
        homeTown: req.body.homeTown,
        imageUrl: req.file.filename,
        image: req.file.buffer, // Include the image buffer in the eventData
      };
  
      // Save eventData to the database (you need to implement this)
  
      res.json(teacherData);
    } catch (error) {
      console.error('Error creating event:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  
router.delete('/:id', teacherController.deleteTeacher); 
// Add other routes as needed

module.exports = router;
