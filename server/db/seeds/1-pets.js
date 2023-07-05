/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = (knex) => {
  return knex('pets').insert([
    {id: 1, name: 'Axolotl', sprite:'axolotl-idle.gif', bio:`You are a thrill-seeker who loves adventure and excitement. With a vibrant and energetic personality, you enjoy partying, traveling, and soaking up the sun in tropical destinations.`},
    {id: 2, name: 'Penguin', sprite:'penguin idle.gif', bio:`You are an adventurous nature lover who seeks solace in the great outdoors. With a cool and calm demeanor, you enjoy hiking, exploring mountains, and embracing the thrill of flight (or at least trying to fly).`},
    {id: 3, name: 'Bear', sprite:'bear-idle.gif', bio:`You are a relaxed and easygoing individual who cherishes simplicity and comfort. With a contented and down-to-earth nature, you enjoy sleeping, snacking, and finding joy in life's little pleasures.`},
    {id: 4, name: 'Cat', sprite:'cat-idle.gif', bio:`You are a laid-back introvert who finds comfort in solitude and peaceful moments. With a love for literature and a cozy atmosphere, you enjoy staying at home, reading, and appreciating the beauty of comfort.`}
  ]);
};
