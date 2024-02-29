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

module.exports = upload;
