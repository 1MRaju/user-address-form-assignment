const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    address:{
        type:String,
        required: true
    }
})
const AddressModel = mongoose.model('user-address', addressSchema)
module.exports = AddressModel
  