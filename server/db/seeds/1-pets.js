/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {p_id: 1, name: 'Axolotl', sprite:'axolotl-idle.gif', bio:'placeholder axolotl bio'},
    {p_id: 2, name: 'Penguin', sprite:'penguin idle.gif', bio:'placeholder penguin bio'},
    {p_id: 3, name: 'Bear', sprite:'bear-idle', bio:'placeholder bear bio'},
    {p_id: 4, name: 'Cat', sprite:'cat-idle', bio:'placeholder cat bio'}
  ]);
};
