if(process.env.NODE_ENV !=='production') {
    require('dotenv').config();
    //this is going to load all the variables from our .env file and import them into
    //our .process.env in our server.js 
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

//Here we require the file with our newly created router 
const indexRouter = require('./routes/index');

//Set our view Engine - using ejs as our view engine
app.set('view engine', 'ejs');

//Set where our views are going to be coming from - in this case a view directory
app.set('views', __dirname + '/views');

//Hookup express layouts - set up our layout file - the idea behind this is that every single
//file will be put in here so we don't have to duplicate every beginning and ending HTML file
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

//import mongoose
const mongoose = require('mongoose');
//you never hard code connection you want it
//to be dependent on your environment as when you are developing you want
//mongoose to connect to your local Mongodb server but when you have your app deployed u want to connect to a server on the web somewhere
//so we pass a string here that comes from our environment variables
mongoose.connect(process.env.DATABASE_URL, { 
useNewUrlParser:true,
useUnifiedTopology:true
});

const db = mongoose.connection;
//if we run into an error we pring the error out in our console
db.on('error', error => console.error(error));
//this is when we open up our database for the first time
db.once('open', () => {console.log('Connected to Mongoose')
});


//WE tell it the root path using is root path of our app '/' we tell our app to use the router we created
app.use('/', indexRouter);

//tell our app to listen to a certain port - for development we set this as default to port 3000
app.listen(process.env.PORT || 3000);
