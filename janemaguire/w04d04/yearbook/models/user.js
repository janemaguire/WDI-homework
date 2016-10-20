const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type:String, required:true },
  github: { type:String, unique:true },
  image: String,
  bio: String,
  portfolio: String,
  projects: [String]
});

module.exports = mongoose.model('User', userSchema);
