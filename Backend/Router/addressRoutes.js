// routes/addressRoutes.js
const express = require('express');
const router = express.Router();
const addressController = require('../Controller/addressController');

// Route for creating a new address
router.post('/addresses', addressController.createAddress);
router.put('/addresses/:id', addressController.updateAddress);
// Route for fetching all addresses
router.get('/addresses', addressController.getAllAddresses);
router.delete('/addresses/:id', addressController.deleteAddress);

module.exports = router;
