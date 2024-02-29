    // controllers/addressController.js
    const Address = require('../Models/Address');

    // Controller for creating a new address
    exports.createAddress = async (req, res) => {
        try {
          const { email, phone, address } = req.body;
          console.log('Received request to create address:', { email, phone, address });
      
          // Add additional logging here if needed
      
          const newAddress = new Address({ email, phone, address });
          const savedAddress = await newAddress.save();
          console.log('Address created successfully:', savedAddress);
      
          res.status(201).json(savedAddress);
        } catch (error) {
          console.error('Error creating address:', error.message);
          res.status(500).json({ error: error.message });
        }
      };
  // controllers/addressController.js

// Controller for updating an existing address
exports.updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, phone, address } = req.body;
    
    const updatedAddress = await Address.findByIdAndUpdate(
      id,
      { email, phone, address },
      { new: true } // This option returns the modified document
    );

    if (!updatedAddress) {
      return res.status(404).json({ error: 'Address not found' });
    }

    console.log('Address updated successfully:', updatedAddress);
    res.json(updatedAddress);
  } catch (error) {
    console.error('Error updating address:', error.message);
    res.status(500).json({ error: error.message });
  }
};

    // Controller for fetching all addresses
    exports.getAllAddresses = async (req, res) => {
    try {
        const addresses = await Address.find();
        res.json(addresses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };
    exports.deleteAddress = async (req, res) => {
      try {
        const { id } = req.params;
        const deletedAddress = await Address.findByIdAndDelete(id);
    
        if (!deletedAddress) {
          return res.status(404).json({ error: 'Address not found' });
        }
    
        console.log('Address deleted successfully:', deletedAddress);
        res.json(deletedAddress);
      } catch (error) {
        console.error('Error deleting address:', error.message);
        res.status(500).json({ error: error.message });
      }
    };
    