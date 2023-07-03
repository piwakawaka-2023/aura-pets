/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('chats', (table) => {
    table.increments('id').primary()
    table.string('user_id').references('users.id')
    table.string('message')
    table.timestamp('created_at').defaultTo(Date.now())

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('chat')
};
