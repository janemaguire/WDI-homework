const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  github: String,
  image: String,
  bio: String,
  portfolio: String,
  projects: [String]
});

module.exports = mongoose.model('User', userSchema);
