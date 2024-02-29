const Class = require('../Models/Class');

const createClass = async (name, ageString, gameName, price, staffName, imageUrl) => {
  // Extract the numeric value from ageString
  const age = parseInt(ageString);

  try {
    // Create a new instance of the Class model
    const newClass = new Class({
      name,
      age,
      gameName,
      price,
      staffName,
      imageUrl // Assuming imageUrl is passed as an argument
    });

    // Save the new instance to the database
    await newClass.save();

    return newClass;
  } catch (error) {
    console.error('Error creating class:', error);
    throw error;
  }
};

// Usage
createClass('Sample Class', '2-6', 'Sample Game', '10', 'Sample Staff', 'example.jpg')
  .then(newClass => {
    console.log('New class created:', newClass);
  })
  .catch(error => {
    console.error('Error creating class:', error);
  });
