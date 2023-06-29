/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('answers', (table) => {
    table.increments('a_id').primary()
    table.integer('q_id').references('questions.q_id')
    table.string('answer')
    table.integer('p_id').references('pets.p_id')

  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('answers')
}
