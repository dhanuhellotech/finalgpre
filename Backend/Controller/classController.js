// controllers/classController.js

const Class = require('../Models/Class');
const fs = require('fs');
const path = require('path');

exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (error) {
    console.error('Error fetching classes:', error);
    res.status(500).json({ error: 'Failed to fetch classes' });
  }
};

exports.createClass = async (req, res) => {
  try {
    const classObj = await Class.create({ ...req.body, imageUrl: req.file.path }); // Assuming you're using multer for file uploads
    res.status(201).json(classObj);
  } catch (error) {
    console.error('Error creating class:', error);
    res.status(500).json({ error: 'Failed to create class' });
  }
};

exports.getClassById = async (req, res) => {
  try {
    const classObj = await Class.findById(req.params.id);
    if (!classObj) {
      return res.status(404).json({ error: 'Class not found' });
    }
    res.json(classObj);
  } catch (error) {
    console.error('Error fetching class:', error);
    res.status(500).json({ error: 'Failed to fetch class' });
  }
};

exports.updateClass = async (req, res) => {
    try {
      const classId = req.params.id;
  
      // Check if required fields are provided
      const { name, age, gameName, price, staffName } = req.body;
      if (!name || !age || !gameName || !price || !staffName) {
        return res.status(400).json({ message: 'All fields are required for updating a class' });
      }
  
      const updatedClass = await Class.findByIdAndUpdate(
        classId,
        {
          name,
          age,
          gameName,
          price,
          staffName,
          imageUrl: req.file ? req.file.filename : undefined,
        },
        { new: true }
      );
  
      if (!updatedClass) {
        return res.status(404).json({ message: 'Class not found' });
      }
  
      res.json(updatedClass);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

exports.deleteClass = async (req, res) => {
  try {
    const classObj = await Class.findByIdAndDelete(req.params.id);
    if (!classObj) {
      return res.status(404).json({ error: 'Class not found' });
    }
    fs.unlinkSync(path.join(__dirname, '..', classObj.imageUrl)); // Delete image file from server
    res.json({ message: 'Class deleted successfully' });
  } catch (error) {
    console.error('Error deleting class:', error);
    res.status(500).json({ error: 'Failed to delete class' });
  }
};
