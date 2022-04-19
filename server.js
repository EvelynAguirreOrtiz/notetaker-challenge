const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const { notes } = require('./db/db');
const apiRoutes = require('./Routes/apiRoutes');
const htmlRoutes = require('./Routes/htmlRoutes');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));



// GET test route 
// always delete
app.get('/api/notes', (req, res) => {
  // res.json(notes);
  console.log("notes");
});


// api routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// always at end before start Express.js
// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// start Express.js
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});









