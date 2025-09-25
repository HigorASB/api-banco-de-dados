/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("marcas").del();
  await knex("marcas").insert([
    { id: 1, nome: "apple", site: "apple.com", telefone: "0800111111" },
    { id: 2, nome: "samsung", site: "samsung.com", telefone: "0800222222" },
  ]);
};
