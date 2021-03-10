//Import express
const express = require('express') 
//Get the router pushed
const router = express.Router()
const Book = require('../models/book')
//Using the router variable we can create a route - we use the get method
//For our server to know that this router exists we need to hook up our application to it
// We have to import this router into our server to do this we go into server.js and require this file
router.get('/', async(req, res) => {
    let books;
    try {
        books = await Book.find().sort({ createdAt: 'desc'}).limit(10).exec();
    } catch {
        books = [];
    }
    res.render('index', {books: books })
})

module.exports = router