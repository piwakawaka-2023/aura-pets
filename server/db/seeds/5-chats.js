/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('chats').insert([
    {id: 1, user_id: '1', message:'helloooo'},
    {id: 2, user_id: '1', message:'Anybody wanna battle?'},
  ]);
};
