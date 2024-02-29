const { request } = require('express');
const Tobbar = require('../Models/Topbar');

// Get Tobbar details
const getTobbarDetails = async (req, res) => {
  try {
    const tobbarDetails = await Tobbar.find();
    res.json(tobbarDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add Tobbar details

const addTobbarDetails = async (req, res) => {
  console.log(req.body)
  const tobbar = new Tobbar({
    number: req.body.number,
    location: req.body.location,
    schoolOpenTiming: req.body.schoolOpenTiming
  });

  try {
    const newTobbar = await tobbar.save();
    res.status(201).json(newTobbar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Tobbar details
const updateTobbar = async (req, res) => {
  try {
    const tobbarId = req.params.id;

    // Check if required fields are provided
    const { number, location, schoolOpenTiming } = req.body;
    if (!number || !location || !schoolOpenTiming) {
      return res.status(400).json({ message: 'All fields are required for updating Tobbar details' });
    }

    const updatedTobbar = await Tobbar.findByIdAndUpdate(
      tobbarId,
      {
        number,
        location,
        schoolOpenTiming,
      },
      { new: true }
    );

    if (!updatedTobbar) {
      return res.status(404).json({ message: 'Tobbar entry not found' });
    }

    res.json(updatedTobbar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a Tobbar entry by ID
const deleteTobbar = async (req, res) => {
  try {
    const tobbarId = req.params.id;
    const deletedTobbar = await Tobbar.findByIdAndDelete(tobbarId);

    if (!deletedTobbar) {
      return res.status(404).json({ message: 'Tobbar entry not found' });
    }

    res.json({ message: 'Tobbar entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTobbarDetails,
  addTobbarDetails,
  updateTobbar,
  deleteTobbar
};
