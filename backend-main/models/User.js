// 'Schema' is a structural view for the data in dataBase
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({  // creating schema for user
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: String,
        default: Date.now
    },

  });

  const User = mongoose.model('user', UserSchema);
  module.exports = User // converting schema(userSchema) to model(user)
