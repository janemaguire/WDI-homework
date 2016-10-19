const mongoose = require('mongoose');
const dinoSchema = mongoose.Schema({
    name: String,
    age: String,
    species: String,
    image: String
});

module.exports = mongoose.model('Dino', dinoSchema);
