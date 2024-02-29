const express = require('express');
const router = express.Router();
const { Addmission } = require('../Models/Enquiry'); // Ensure that the path is correct

const childEnquiry = async (req, res) => {
  try {
    const { username, email, mobile, Address, state, childname, childgrade, message } = req.body;

    // Validate name using regex
    const nameRegex = /^[a-zA-Z\s]{3,15}$/;
    if (!nameRegex.test(username)) {
      return res.status(400).json({
        error: 'Invalid name. It should be between 3 and 15 characters and only contain letters, spaces.',
      });
    }

    // Validate email using regex
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Validate phone number using regex
    const phoneRegex = /\d{10}/;
    if (!phoneRegex.test(mobile)) {
      return res.status(400).json({ error: 'Invalid phone number' });
    }

    // Add additional validation for state and city (you can modify these regex patterns as needed)
    const stateRegex = /^[a-zA-Z\s]{2,20}$/;

    if (!stateRegex.test(state)) {
      return res.status(400).json({ error: 'Invalid state name' });
    }

    const addmission = new Addmission({
      username,
      email,
      mobile,
      Address,
      state,
      childname,
      childgrade,
      message,
    });

    console.log('addmission');
    await addmission.save();
    console.log(addmission);
    res.status(200).json({ message: 'Addmission created successfully', addmission });
  } catch (error) {
    console.error('Error saving to db', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const enquiryGet = async (req, res) => {
  try {
    const addmissions = await Addmission.find();
    res.json({ contacts: addmissions });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const deleteAdmissionById = async (req, res) => {
  try {
    const admissionId = req.params.id;

    // Check if the admission with the specified ID exists
    const existingAdmission = await Addmission.findById(admissionId);
    if (!existingAdmission) {
      return res.status(404).json({ error: 'Admission not found' });
    }

    // Delete the admission
    await existingAdmission.deleteOne();

    // Respond with a success status code
    res.status(200).json({ message: 'Admission deleted successfully' });
  } catch (error) {
    console.error('Error deleting admission by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = {
  childEnquiry,
  enquiryGet,
  deleteAdmissionById
};
