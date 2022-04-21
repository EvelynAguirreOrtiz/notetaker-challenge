const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
// const { notes } = require('./db/db');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// api routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// start Express.js
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
