/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('users').insert([
    {id: 1, username: 'aurapetslover991', pet_nickname: 'skarn', pet_id: 4, bio: `Sk'aaaaaarn`, user_auth_id: `auth0|123`  },
  ]);
};
