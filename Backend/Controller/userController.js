// controllers/userController.js
const User = require('../Models/User');

// userController.js

const getUser = async (req, res) => {
  try {
    const { phoneNumber, email, address } = req.body;

    const newUser = new User({
      phoneNumber,
      email,
      address,
    });

    await newUser.save();
    res.json({ message: 'User added successfully' });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).send('Internal Server Error');
  }
};

const createUser = async (req, res) => {
  try {
    const { phoneNumber,email, address } = req.body;

    const newUser = new User({
      phoneNumber,
    email,
      address,
    });

    const savedUser = await newUser.save();

    res.json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { phoneNumber, email, address } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { phoneNumber, email, address },
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getUser, createUser, updateUser, deleteUser }; // Add getUsers to exports
