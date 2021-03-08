const mongoose = require('mongoose');

// Create a schema ie a table 
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(('Author'), authorSchema);