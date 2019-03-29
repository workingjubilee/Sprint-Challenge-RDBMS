const express = require("express");

const Actions = require("./actionKnex.js");

const router = express.Router();

// - [ ] An `action` belongs to only one project. An action has:
//   - [ ] a unique id.
//   - [ ] a description of what needs to be done.
//   - [ ] a notes column to add additional information.
//   - [ ] a flag that indicates if the action has been completed.

// Crud
router.post('/', async (req,res) => {
  let { projectID, notes, description, complete } = req.body
  const newAction = {  projectID, notes, description, complete }
  if (undefined === complete) {
    newAction.complete = false
  }
  console.log(newAction); // debugging

  if ( !notes || !description ) {
    res.status(400).json("Not enough data to POST.")
  } else {

    try {
      let reply = await Actions.insert(newAction);
      res.status(201).json(reply);

    } catch(error) {
      res.status(500).json({ errorMessage: "POST machine broke." });
    }

  }
});

//cRud
router.get('/', async (req,res) => {
  try {
      let reply = await Actions.get();
      res.status(200).json(reply);
    } catch(error) {
      res.status(500).json({ errorMessage: "GET machine broke." });
    }

});

module.exports = router;