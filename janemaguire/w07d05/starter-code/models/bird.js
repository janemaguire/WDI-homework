const mongoose = require('mongoose');

const birdSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  breed: { type: String, unique: true, required: true },
  image: { type: String, required: true }
});

module.exports = mongoose.model('Bird', birdSchema);
