/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = (knex) => {
  return knex('pets').insert([
    {id: 1, name: 'Axolotl', sprite:'axolotl-idle.gif', bio:'placeholder axolotl bio'},
    {id: 2, name: 'Penguin', sprite:'penguin idle.gif', bio:'placeholder penguin bio'},
    {id: 3, name: 'Bear', sprite:'bear-idle', bio:'placeholder bear bio'},
    {id: 4, name: 'Cat', sprite:'cat-idle', bio:'placeholder cat bio'}
  ]);
};
