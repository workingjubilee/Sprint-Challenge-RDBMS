const db = require("../dbConfig.js");

// - [ ] A `action` can contain multiple actions and has:
//   - [ ] a unique Id.
//   - [ ] a name.
//   - [ ] a description.
//   - [ ] a flag that indicates if the action is complete or not.
// - [ ] An `action` belongs to only one action. An action has:
//   - [ ] a unique ID.
//   - [ ] a description of what needs to be done.
//   - [ ] a notes column to add additional information.
//   - [ ] a flag that indicates if the action has been completed.


function get() {
  return db('actions');
}

function getByID(ID) {
  return db('actions').where({ ID });
}

function insert(newAction) {
  console.log(newAction); // debugging
  return db('actions')
    .insert(newAction)
}

function update(ID, actionChanges) {
  return db('actions')
    .where({ ID })
    .update(actionChanges);
}

function remove(ID) {
  return db('actions')
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