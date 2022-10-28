const express = require('express');

// Import our modular routers for /tips and /feedback
const noteshtml = require('./notes');

const app = express();

app.use('/notes', noteshtml)

module.exports = app;
