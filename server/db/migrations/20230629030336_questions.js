/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('questions', (table) => {
    table.increments('q_id').primary()
    table.string('question')
    table.integer('a_id').references('answers.a_id')

  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('questions')
}
