const express = require('express')
const { addressController} = require('../controllers/addressController');

const router = express.Router()

// address routes
router.post('/address1', addressController);
// router.get('/address2', addressController);

module.exports=router; 