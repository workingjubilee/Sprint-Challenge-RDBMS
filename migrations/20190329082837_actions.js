exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function (table) {

  table.increments("ID");

  table  
    .integer('projectID')
    .unsigned()
    .references('ID')
    .inTable('projects')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

  table
    .string('description',255)
    .notNullable();

  table
    .string('notes',255)
    .notNullable();

  table
    .boolean('complete')
    .notNullable()

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};


// - [ ] An `action` belongs to only one project. An action has:
//   - [ ] a unique id.
//   - [ ] a description of what needs to be done.
//   - [ ] a notes column to add additional information.
//   - [ ] a flag that indicates if the action has been completed.