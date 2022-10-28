const express = require('express');

// Import our modular routers for /tips and /feedback
const noteshtml = require('./notes');
// const jsIndexStyles = require('../public/js/index');
// const cssStyles = require('../public/css/');


const app = express();

app.use('/notes', noteshtml)
// app.use('/indexStyle', jsIndexStyles)
// app.use('/cssStyle', cssStyles)

module.exports = app;
