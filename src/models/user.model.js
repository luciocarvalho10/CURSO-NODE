const mongoose = require('mongoose')

module.exports = mongoose.model('User', new mongoose.Schema({
  firstName: {type: String, requireed: true },
  lastName: {type: String, requireed: true },
  email: {type: String, requireed: true },
  password: {type: String, requireed: true, minlength: 7 },
}))