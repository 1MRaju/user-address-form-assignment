const Address = require("../models/addressModel");

const addressController = async (req, res) => {
  const { address } = req.body;

  try {
    // Create a new Address document in MongoDB
    const newAddress = new Address({ address });
    await newAddress.save();

    res.status(201).json({ 
      message: 'Address added successfully',
       address: newAddress 
      });
  } catch (error) {
    console.error('Error inserting address:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { addressController };
