const express = require('express');
const path = require('path');
const fs = require('fs')
const api = require('./routes/index');
// above are modules from npm.

// sets liten port to 3001 is auto one isn't set.  
const PORT = process.env.PORT || 3001;

// 
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// makes public the static page.
app.use(express.static('public'));

// lets 'nav' 'header' take back to home page and sets the public as /.
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

// lets index.html load notes page.
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

// sets base to index.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

// sets auto listen port location.
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);