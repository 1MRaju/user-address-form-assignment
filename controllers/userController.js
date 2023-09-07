const User = require("../models/userModel");
const userController = async (req, res) => {
  const { name } = req.body;

  try {
    // const user = await User.findOne({ name: name });

    // if (user) {
    //   res.status(200).send({ message: 'User already registered' });
    // } else {
    //   const newUser = new User({
    //     name
    //   });

      const newUser = new User({
        name
      })

      await newUser.save();
      res.status(200).send({
        message: 'New user Registered Successfully',
        success: true,
      });
    }
  catch (err) {
    res.status(500).send(err); 
  }

  console.log(req.body);
};

module.exports = { userController };