const Event = require('../Models/Event');
const multer = require('../middlewares/upload');

// Middleware to handle image upload
exports.uploadImage = multer.single('image');

// Controller to get all events
exports.addEvent = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image provided' });
    }

    const { title, description, category } = req.body; // Ensure 'category' is present

    const newEvent = new Event({
      title,
      description,
      imageUrl: req.file.filename,
      category,
    });

    await newEvent.save();
    res.json({ message: 'Event added successfully' });
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Controller to add a new event
// Controller to add a new event


// Controller to add a new event
exports.getEvent = async (req, res) => {
  try {
    // Check if image upload middleware has run and added file information to req.file
  

    const { title, description, category } = req.body;

    const newEvent = new Event({
      title,
      description,
      imageUrl: req.file.filename,
      category,
    });

    await newEvent.save();
    res.json({ message: 'Event added successfully' });
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).send('Internal Server Error');
  }
};



// Controller to delete an event
exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).send('Internal Server Error');
  }
};
exports.getEventsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const events = await Event.find({ category });
    res.json(events);
  } catch (error) {
    console.error('Error fetching events by category:', error);
    res.status(500).send('Internal Server Error');
  }
};
// Controller to get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
};
