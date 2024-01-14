const express = require('express')
const { 
  postUser, 
  getAllUser, 
  getUser, 
  updateUser, 
  deleteUser } = require('../controllers/userController');

const router = express.Router()

// user route
router.post('/user', postUser);
router.get('/all-users', getAllUser);
router.get('/get-user/:userId', getUser);
router.put('/update-user/:userId', updateUser);
router.delete('/delete-user/:userId', deleteUser);

module.exports=router;