const express = require("express");

const Projects = require("./projectKnex.js");

const router = express.Router();

// - [ ] A `project` can contain multiple actions and has:
//   - [ ] a unique Id.
//   - [ ] a name.
//   - [ ] a description.
//   - [ ] a flag that indicates if the project is complete or not.
// - [ ] An `action` belongs to only one project. An action has:
//   - [ ] a unique id.
//   - [ ] a description of what needs to be done.
//   - [ ] a notes column to add additional information.
//   - [ ] a flag that indicates if the action has been completed.

router.post('/', async (req,res) => {
  let { name, description, complete } = req.body
  const newProject = { name, description, complete }
  if (undefined === complete) {
    newProject.complete = false
  }
  console.log(newProject);

  if ( !name || !description ) {
    res.status(400).json("Not enough data to POST.")
  } else {

    try {
      let reply = await Projects.insert(newProject);
      res.status(201).json(reply);

    } catch(error) {
      res.status(500).json({ errorMessage: "POST machine broke." });
    }

  }
});

router.get('/', async (req,res) => {
  try {
      let reply = await Projects.get();
      res.status(200).json(reply);
    } catch(error) {
      res.status(500).json({ errorMessage: "GET machine broke." });
    }

});

module.exports = router;