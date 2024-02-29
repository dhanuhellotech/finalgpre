const express = require('express')
const router = express.Router()
const UserModels = require('../Models/Contact.form')
const createContact = async (req, res) => {
  try {
    const { username, email, location, mobile, City, Comments } = req.body;

      // Validate name using regex (Allow only letters, spaces, and hyphens)
      const nameRegex = /^[a-zA-Z\s]{3,15}$/;
      if (!nameRegex.test(username)) {
        return res.status(400).json({ error: 'Invalid name. It should be between 3 and 15 characters and only contain letters, spaces.' });
      }



    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Validate phone number using regex
    const phoneRegex = /\d{10}/;
    if (!phoneRegex.test(mobile)) {
      return res.status(400).json({ error: 'Invalid phone number' });
    }

   // Validate comments using regex (Allow only letters, spaces, with a length between 10 and 500 characters)
   const commentRegex = /^[a-zA-Z\s]{10,500}$/;
   if (!commentRegex.test(Comments)) {
     return res.status(400).json({ error: 'Invalid comment. We expect it to be between 10 and 500 characters and only contain letters and spaces.' });
   }


    const newContact = new UserModels({
      username,
      email,
      location,
      mobile,
      City,
      Comments
    });

    await newContact.save();
    console.log(newContact);
    res.json({ message: 'Contact created successfully!', contact: newContact });
  } catch (error) {
    console.error('Error saving to database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAll = async(req,res)=>{

  try {
    const allContacts = await UserModels.find();

    // Send the array of contacts as a response
    res.json({ contacts: allContacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Internal Server Error' }); 
  }
}

const getbyid = async(req,res)=>{
  try {

    const contactid= req.params.id;
    const contact = await UserModels.findById(contactid);
    res.json({ contact });
    console.log(contact);


    if(!contact) {
      res.status(400).json({error: 'contact not found'})
    }  
 
  } catch (error) {
    console.error('Error fetching contact by ID:', error);
    res.status(500).json({error:'internal server error'})
  }
}


const updateById = async (req, res) => {
  try {
    const contactId = req.params.id;
    const { username, email, location, mobile, City, Comments } = req.body;

    console.log('Updating contact with ID:', contactId);
    console.log('Request body:', req.body);

    // Check if the contact with the specified ID exists
    const existingContact = await UserModels.findById(contactId);
    if (!existingContact) {
      console.log('Contact not found');
      return res.status(404).json({ error: 'Contact not found' });
    }

    // Update the contact fields
    existingContact.username = username || existingContact.username;
    existingContact.email = email || existingContact.email;
    existingContact.location = location || existingContact.location;
    existingContact.mobile = mobile || existingContact.mobile;
    existingContact.City = City || existingContact.City;
    existingContact.Comments = Comments || existingContact.Comments;

    // Save the updated contact
    const updatedContact = await existingContact.save();

    // Respond with the updated contact
    console.log('Contact updated successfully');
    res.json({ message: 'Contact updated successfully!', contact: updatedContact });

  } catch (error) {
    console.error('Error updating contact by ID:', error);

    // Log the specific error message
    console.error('Error message:', error.message);

    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteById = async (req, res) => {
  try {
    const contactId = req.params.id;

    console.log('Deleting contact with ID:', contactId);

    // Check if the contact with the specified ID exists
    const existingContact = await UserModels.findById(contactId);
    if (!existingContact) {
      console.log('Contact not found');
      return res.status(404).json({ error: 'Contact not found' });
    }

    // Delete the contact
    await existingContact.deleteOne();

    // Respond with a success status code
    console.log('Contact deleted successfully');
    res.status(200).json({message:'contact deleted successfully'}) // 204 No Content

  } catch (error) {
    console.error('Error deleting contact by ID:', error);

    // Log the specific error message
    console.error('Error message:', error.message);

    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
    createContact,
    getAll,
    getbyid,
    updateById,deleteById
  };