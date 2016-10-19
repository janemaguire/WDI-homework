const mongoose = require('mongoose');
const quoteSchema = mongoose.Schema({
    content: String,
    cite: string
});

module.exports = mongoose.model('Quote', quoteSchema);
