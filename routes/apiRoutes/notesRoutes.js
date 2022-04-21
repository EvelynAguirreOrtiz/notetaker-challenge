const router = require('express').Router();
// const { filterByQuery, findById,} = require('../../lib/notes');
const { notes } = require('../../db/db');
const fs = require("fs");


router.get('/notes', (req, res) => {
  let results = notes;
  // if (req.query) {
  //   results = filterByQuery(req.query, results);
  // } 
  res.json(results);
});

// router.post('/api/notes', (req, res) => {
//   // req.body is where our incoming content will be
//   console.log(req.body);
//   res.json(req.body);
// });


// length undefined TypeError
router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();

  // if any data in req.body is incorrect, send 400 error back
  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

module.exports = router;