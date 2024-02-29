const express = require('express');
const router = express.Router();
const blogController = require('../Controller/blogController');
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

// Define your blog routes here
router.get('/', blogController.getAllBlogs);
router.put('/:id', upload.single('image'), blogController.updateBlog);
router.post('/', upload.single('image'), blogController.createBlog);
router.delete('/:id', blogController.deleteBlog); 
// Add other routes as needed

module.exports = router;
