/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed =  (knex) => {
  return knex('questions').insert([
    {id: 8001, question: "What is your Preferred way to spend the weekend?"},
    {id: 8002, question: "If you could have any 1 superpower or ability, what would it be?" },
    {id: 8003, question: "What's your ideal holiday destination?" },
    {id: 8004, question: "What is your favorite genre of fictional storytelling?" },
    {id: 8005, question: "If you were a celebrity, what would be known for?" },
    {id: 8006, question: "If you could talk to any historical figure, who would it be?" },
    {id: 8007, question: "If you were stranded on a desert island, which item would you bring with you?" },
    {id: 8008, question: "What item from your wardrobe do you like the most?" },
    {id: 8009, question: "What type of game show would you be a contestant in?" },
    {id: 8010, question: "If you could make a secret base / hideout anywhere, where would it be?" }
  ]);
};
