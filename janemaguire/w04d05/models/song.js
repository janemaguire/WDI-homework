const mongoose = require('mongoose');

const songSchema= mongoose.Schema ({
  name: { type: String, trim: true, require: true, unique: true },
  writers: { type: [String], trim: true },
  chart: { type: Number, trim: true }

});

module.exports = mongoose.model('Song', songSchema);
