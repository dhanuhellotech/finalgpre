// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

// Update user information

// Get user by ID
router.get('/users', userController.getUser);

// Create a new user
router.post('/users', userController.createUser);

// Update user information
router.put('/users/:userId', userController.updateUser);

// Delete user by ID
router.delete('/users/:userId', userController.deleteUser);
module.exports = router;
