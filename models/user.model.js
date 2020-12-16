const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

  email:{
    type: String,
    unique: true,
  },
  auth:{
    hash: String,
    salt: String
  },
  accounts:[{
    accountType: {
      type: String,
      enum : ['Basic Savings' ,'Saving' , 'Current'],
      default: 'Savings',
    },
    balance: {
      type: Number,
      default: 5000,
    },
    createdAt:{
      type: Date,
      default: Date.now(),
    }
  }],
})

const User = mongoose.model('users', userSchema);
module.exports = User;