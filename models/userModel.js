const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String,  required: true },
    email: { type:String,  required: true, unique: true },
    phone: { type:Number,  required:true },
    age: { type:Number,  required:true },
    sex: { type:String,  required:true },
    address: { type:String,  required: true },
    // time: {type: Date, default: Date.now},
},{timestamps:true});

// userSchema.set('timestamps', true);
const UserModel = mongoose.model('users', userSchema)
module.exports=UserModel 
 