// routes/classRoutes.js

const express = require('express');
const router = express.Router();
const classController = require('../Controller/classController');
const multer = require('multer');

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Specify the directory where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Rename uploaded file
  }
});

const upload = multer({ storage });

router.get('/', classController.getAllClasses);
router.post('/', upload.single('image'), classController.createClass); // Use upload middleware for image uploading
router.get('/:id', classController.getClassById);
router.put('/:id', upload.single('image'), classController.updateClass); // Use upload middleware for image updating
router.delete('/:id', classController.deleteClass);

module.exports = router;
