//Import express
const express = require('express');
//Get the router pushed
const router = express.Router();

const Book = require('../models/author');

//All Books Route
router.get('/', async (req, res) => {

})

// New Book Route
router.get('/new', (req, res) => {
 res.send('New Book')
})

// Create Book Route
router.post('/', async (req, res) => {
    res.send('Create Book')
  
})

module.exports = router;