const db = require("../dbConfig.js");

// - [ ] A `project` can contain multiple actions and has:
//   - [ ] a unique Id.
//   - [ ] a name.
//   - [ ] a description.
//   - [ ] a flag that indicates if the project is complete or not.
// - [ ] An `action` belongs to only one project. An action has:
//   - [ ] a unique ID.
//   - [ ] a description of what needs to be done.
//   - [ ] a notes column to add additional information.
//   - [ ] a flag that indicates if the action has been completed.


function get() {
  return db('projects');
}

function getByID(ID) {
  return db('projects').where({ ID });
}

function insert(newProject) {
  console.log(newProject);
  return db('projects')
    .insert(newProject)
}

function update(ID, projectChanges) {
  return db('projects')
    .where({ ID })
    .update(projectChanges);
}

function remove(ID) {
  return db('projects')
    .where({ ID })
    .del();
}


module.exports = {
  get,
  getByID,
  insert,
  update,
  remove,
};