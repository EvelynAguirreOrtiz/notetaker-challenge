const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
const { notes } = require('./db/db');
const apiRoutes = require('./Routes/apiRoutes');
const htmlRoutes = require('./Routes/htmlRoutes');

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// api routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



// `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
app.get('/api/notes', (req, res) => {
  // let results = notes;
  res.json(results);
});

// * `POST /api/notes` should receive a new note to save on the request body, 
// add it to the `db.json` file, and then return the new note to the client. 
// You'll need to find a way to give each note a unique id when it's saved 
// (look into `npm` packages that could do this for you).

app.post('/api/notes', (req, res) => {
  // req.body is where our incoming content will be
  console.log(req.body);
  res.json(req.body);
});


// adds new note
// function createNewNote(body, notes) {
//   const note = body;
//   notes.push(note);
//   fs.writeFileSync(
//     path.join(__dirname, "../db/db.json"),
//     JSON.stringify({ notes }, null, 2)
//   );
//   return note;
// }




// DO NOT ADD ANYTHING AFTER THIS
// always at end before start Express.js
// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});
// always at the end of code
// start Express.js
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});









