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

const getByID = async function(ID) {

  // goal SQL: select * from projects inner join actions on projects.ID = actions.projectID where projects.ID = 1
  
  // missing: inner join actions on projects.ID = actions.projectID

  // return db('projects').where('projects.ID', ID).join('actions', {'projects.ID': 'actions.projectID'})
  // returns: 
  //   [
  //     {
  //         "ID": 1,
  //         "name": "Sprint Challenge RDBMS",
  //         "description": "Build a Projects table",
  //         "complete": "true",
  //         "projectID": 1,
  //         "notes": "Includes DB interactions and POST/GET"
  //     }
  // ]
  // desired shape is:    
  // {
  //     id: 1,
  //     name: 'project name here',
  //     description: 'the project description',
  //     completed: false, // or true, the database will return 1 for true and 0 for false
  //     actions: [
  //       {
  //         id: 1,
  //         description: 'action description',
  //         notes: 'the action notes',
  //         completed: false // or true
  //       },
  //       {
  //         id: 7,
  //         description: 'another action description',
  //         notes: 'the action notes',
  //         completed: false // or true
  //       }
  //     ]
  //   }
  const concatProjectActions = async (ID) => {
    const Project = await db('projects').where('projects.ID', ID)// = select * from projects where projects.ID = ID
    const actions = await db('actions').select('ID','description','notes','complete').where('actions.projectID', ID);
    console.log(Project,actions)

    return { ...Project[0], actions }
  };

  const finalProject = await concatProjectActions(ID);
  console.log(finalProject);
  return finalProject;

  // 50 min remaining, alternate strategy: perform two SELECTs, concatenate appropriately into new shape?

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