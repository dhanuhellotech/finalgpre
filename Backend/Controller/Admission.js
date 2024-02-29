const express = require('express')
const router= express.Router();
const AdmissionModel = require('../Models/AddmissionForm'); // Adjust the path accordingly

const createAdmission = async (req, res) => {
  try {
    const {
      parentFirstName,
      parentLastName,
      childFirstName,
      childLastName,
      dateOfBirth,
      gender,
      currentSchool,
      gradeApplyingFor,
      preferredStartDate,
      questionsComments,
      howDidYouHearAboutUs,
      address
    } = req.body;
console.log(req.body)
    const newAdmission = new AdmissionModel({
      parentFirstName,
      parentLastName,
      childFirstName,
      childLastName,
      dateOfBirth,
      gender,
      currentSchool,
      gradeApplyingFor,
      preferredStartDate,
      questionsComments,
      howDidYouHearAboutUs,
      address,
    });

    await newAdmission.save();

    res.status(201).json({ message: 'Admission created successfully', admission: newAdmission });
  } catch (error) {
    console.error('Error creating admission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllAdmissions = async (req, res) => {
  try {
    const admissions = await AdmissionModel.find();
    res.status(200).json({ admissions });
  } catch (error) {
    console.error('Error fetching admissions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
const deleteByAdmissionId = async (req, res) => {
  try {
    const admissionId = req.params.id;

    console.log('Deleting admission with ID:', admissionId);

    // Check if the admission with the specified ID exists
    const existingAdmission = await AdmissionModel.findById(admissionId);
    if (!existingAdmission) {
      console.log('Admission not found');
      return res.status(404).json({ error: 'Admission not found' });
    }

    // Delete the admission
    await existingAdmission.deleteOne();

    // Respond with a success status code
    console.log('Admission deleted successfully');
    res.status(200).json({ message: 'Admission deleted successfully' });

  } catch (error) {
    console.error('Error deleting admission by ID:', error);

    // Log the specific error message
    console.error('Error message:', error.message);

    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = {
  createAdmission,
  getAllAdmissions,
  deleteByAdmissionId,
};
