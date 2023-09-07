const express = require('express')
const {  userController } = require('../controllers/userController');

const router = express.Router()

// user route
router.post('/user1', userController);

module.exports=router;