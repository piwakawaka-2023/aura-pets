/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('answers', (table) => {
    table.increments('id').primary()
    table.integer('question_id').references('questions.id')
    table.string('answer')
    table.integer('pet_id').references('pets.id')

  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('answers')
}
