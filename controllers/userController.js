const User = require("../models/userModel");

const postUser = async (req, res) => {
  const { name, email, phone, age, sex, address} = req.body;
  try {
    const user = await User.findOne({ name: name, email: email });

    if (user) {
      res.status(200).send({ message: 'User already exist' });
    } else {
      const newUser = new User({name, email, phone, age, sex, address});

      await newUser.save();
      res.status(200).send({
        message: 'New user Created Successfully',
        success: true,
        newUser
      });
    }
  }
  catch (error) {
    res.status(500).send({
      success: false,
      message: 'Error while creating new user',
      error: error.message,
    }); 
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({
      message: 'All users fetched successfully',
      success:true,
      users
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    }); 
  }
}

const getUser = async (req, res) => {
  const {userId} = req.params;
  try {
    const user = await User.findById(userId);

    if(!user){
      res.status(400).send({message:"This user doesnt exixt"});
    }else{
      res.status(200).send({
        success:true,
        message:"User Exist",
        user
      })
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    }); 
  }
}

const updateUser = async (req, res) => {
  const {userId} = req.params;
  try {
    let user = await User.findByIdAndUpdate(userId, req.body, {new:true});

    if(user){
      res.status(200).send({
        success:true,
        message:"User updated successfully",
        user
      })
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    }); 
  }
}

const deleteUser = async (req, res) => {
  const {userId}=req.params;
  try {
   const deletedUser = await User.findByIdAndDelete(userId);
   
    res.status(200).send({
      success:true,
      message:"User deleted successfully",
      deletedUser
    })
   
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    }); 

  }
}

module.exports = { postUser, getAllUser, getUser, updateUser, deleteUser};