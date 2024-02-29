// controllers/newsletterController.js

const Newsletter = require('../Models/Newsletter');

// Upload newsletter
// Upload newsletter
const uploadNewsletter = async (req, res) => {
  try {
    const { title, description, newFilename } = req.body;
    const { filename } = req.file;
    const filePath = req.file.path;

    // Use the newFilename if provided, otherwise use the original filename
    const finalFilename = newFilename || filename;

    const newNewsletter = new Newsletter({
      title,
      description,
      filename: finalFilename, // Use the final filename
      filePath,
    });

    await newNewsletter.save();
    
    res.json({ success: true, filename: finalFilename }); // Return the updated filename
  } catch (error) {
    console.error('Error uploading newsletter:', error);
    res.status(500).json({ error: 'Failed to upload newsletter' });
  }
};

// Get all newsletters
const getAllNewsletters = async (req, res) => {
  try {
    const newsletters = await Newsletter.find();
    res.json(newsletters);
  } catch (error) {
    console.error('Error fetching newsletters:', error);
    res.status(500).json({ error: 'Failed to fetch newsletters' });
  }
};

// Get newsletter by ID
const getNewsletterById = async (req, res) => {
  const { id } = req.params;
  try {
    const newsletter = await Newsletter.findById(id);
    if (!newsletter) {
      return res.status(404).json({ error: 'Newsletter not found' });
    }
    res.json(newsletter);
  } catch (error) {
    console.error('Error fetching newsletter:', error);
    res.status(500).json({ error: 'Failed to fetch newsletter' });
  }
};

// Update newsletter by ID
const updateNewsletterById = async (req, res) => {
  const { id } = req.params;
  try {
    const { title, description, newFilename } = req.body;
    let updateFields = { title, description };

    // Check if a new file is uploaded
    if (req.file) {
      const { filename } = req.file;
      const filePath = req.file.path;
      updateFields = { ...updateFields, filename, filePath };
    }

    // Find the newsletter by ID
    const newsletter = await Newsletter.findById(id);

    if (!newsletter) {
      return res.status(404).json({ error: 'Newsletter not found' });
    }

    // Update the filename if newFilename is provided
    if (newFilename) {
      await newsletter.updateFilename(newFilename); // Update filename using the schema method
    }

    // Update the other fields of the newsletter
    const updatedNewsletter = await Newsletter.findByIdAndUpdate(id, updateFields, { new: true });
    
    res.json(updatedNewsletter);
  } catch (error) {
    console.error('Error updating newsletter:', error);
    res.status(500).json({ error: 'Failed to update newsletter' });
  }
};

// Delete newsletter by ID
const deleteNewsletterById = async (req, res) => {
  const { id } = req.params;
  try {
    await Newsletter.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting newsletter:', error);
    res.status(500).json({ error: 'Failed to delete newsletter' });
  }
};

module.exports = { 
  uploadNewsletter,
  getAllNewsletters,
  getNewsletterById,
  updateNewsletterById,
  deleteNewsletterById
};
