/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("marcas", (table) => {
      table.increments("id").primary;
      table.string("nome", 100).notNullable();
      table.string("site", "100");
      table.string("telefone", 15);
    })
    .createTable("produtos", (table) => {
      table.increments("id").primary;
      table.string("nome", 100).notNullable();
      table.string("site", "100");
      table.string("telefone", 15);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("marcas").dropTable("produtos");
};
