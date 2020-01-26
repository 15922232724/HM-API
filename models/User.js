const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  data: {
    type: String,
    default: Date.now
  },
  picture: {
    type: String,
    default: '112 '
  }
})
module.exports = User = mongoose.model("users", UserSchema)