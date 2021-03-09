//Book Schema

const mongoose = require('mongoose');

// Create a schema ie a table 
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    publishDate: {
        type: Date,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    coverImageName: {
        type: String,
        required: true
    },
    author: {
        //Referencing another object inside of our collections
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    }
})

module.exports = mongoose.model(('Book'), bookSchema);