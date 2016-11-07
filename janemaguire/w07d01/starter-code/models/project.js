const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: { type: String, required: true },
  github: { type: String, required: true },
  url: { type: String, required: true },
  users: [{type: mongoose.Schema.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model("Project", projectSchema);
