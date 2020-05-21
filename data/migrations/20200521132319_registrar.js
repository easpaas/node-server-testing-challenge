exports.up = function (knex) {
  return knex.schema.createTable("students", tbl => {
    tbl.increments("id");

    tbl.string("Name", 255).notNullable();
    tbl.integer("Grade").notNullable();
    tbl.string("Enrollment_Date").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("students");
};
