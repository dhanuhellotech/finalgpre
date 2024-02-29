const express = require('express');
const router = express.Router();
const { 
  uploadNewsletter, 
  getAllNewsletters, 
  getNewsletterById, 
  updateNewsletterById, 
  deleteNewsletterById 
} = require('../Controller/newsletterController');
const multer = require('multer');

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.pdf');
  },
});

const upload = multer({ storage: storage });

// Route for uploading a newsletter
router.post('/upload', upload.single('pdf'), uploadNewsletter);

// Route for getting all newsletters
router.get('/', getAllNewsletters);

// Route for getting a newsletter by ID
router.get('/:id', getNewsletterById);

// Route for updating a newsletter by ID
router.put('/:id', upload.single('pdf'), updateNewsletterById);

// Route for deleting a newsletter by ID
router.delete('/:id', deleteNewsletterById);

module.exports = router;
