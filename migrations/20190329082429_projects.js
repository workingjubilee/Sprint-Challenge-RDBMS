
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function (table) {

  table.increments("ID");

  table
    .string('name',128)
    .notNullable();

  table
    .string('description',255)
    .notNullable();

  table
    .boolean('isComplete')
    .notNullable();

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};

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