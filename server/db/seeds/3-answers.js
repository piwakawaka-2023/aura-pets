/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('answers').del()
  await knex('answers').insert([
    {a_id: 9001, answer: `I'll be partying until the morning!`, q_id: 1, p_id: 1},
    {a_id: 9002, answer: `I'd go out for a nice hike in the hills! `, q_id: 1, p_id: 2},
    {a_id: 9003, answer: `*yawn* I just wanna sleep through the whole weekend.`, q_id: 1, p_id: 3},
    {a_id: 9004, answer: `For me, I'd stay at home and read.`, q_id: 1, p_id: 4},
    {a_id: 9005, answer: `I would love to have super speed and travel all across the world!`, q_id: 2, p_id: 1},
    {a_id: 9006, answer: `Flight, of course!`, q_id: 2, p_id: 2},
    {a_id: 9007, answer: `Telekinesis, so I can pick up the remote from across the room..`, q_id: 2, p_id: 3},
    {a_id: 9008, answer: `I'd love to turn invisible and hide from the world.`, q_id: 2, p_id: 4},
    {a_id: 9009, answer: `I'd love to visit a tropical resort and swim in the warm water. `, q_id: 3, p_id: 1},
    {a_id: 9010, answer: `I'd go to a Ski Village up in the mountains! `, q_id: 3, p_id: 2},
    {a_id: 9011, answer: `My ideal holiday is one where I can snuggle up in a warm cottage.`, q_id: 3, p_id: 3},
    {a_id: 9012, answer: `Personally, the best holiday destination is my bed!`, q_id: 3, p_id: 4},
    {a_id: 9013, answer: `Action all the way!`, q_id: 4, p_id: 1},
    {a_id: 9014, answer: `I love a good thriller.`, q_id: 4, p_id: 2},
    {a_id: 9015, answer: `There's nothing like a good comedy to make me laugh.`, q_id: 4, p_id: 3},
    {a_id: 9016, answer: `Dramas always have me at the edge of my seat.`, q_id: 4, p_id: 4},
    {a_id: 9017, answer: `I'd be getting into dramas and scandals 24/7!`, q_id: 5, p_id: 1},
    {a_id: 9018, answer: `I would be super rich and have crazy mega mansions!`, q_id: 5, p_id: 2},
    {a_id: 9019, answer: `I'd be known for being chill and down to earth.`, q_id: 5, p_id: 3},
    {a_id: 9020, answer: `Who would want to be a celebrity? not me!`, q_id: 5, p_id: 4},
    {a_id: 9021, answer: `Real or myth, I'd love to talk to Hercules!`, q_id: 6, p_id: 1},
    {a_id: 9022, answer: `I would meet the great Muhammad Ali!`, q_id: 6, p_id: 2},
    {a_id: 9023, answer: `Keanu Reeves! He's a historical figure to me!`, q_id: 6, p_id: 3},
    {a_id: 9024, answer: `I wanna talk to the great Van Gogh!`, q_id: 6, p_id: 4},
    {a_id: 9025, answer: `I would bring a sound system so I can play music as loud as I want without anyone complaining! `, q_id: 7, p_id: 1},
    {a_id: 9026, answer: `I would bring a jet ski. Not to leave with, just so I can drive around the island in circles!`, q_id: 7, p_id: 2},
    {a_id: 9027, answer: `I'd bring three lifetimes worth of snacks!`, q_id: 7, p_id: 3},
    {a_id: 9028, answer: `For me i'd bring an entire library of books I can read until the end of time.`, q_id: 7, p_id: 4},
    {a_id: 9029, answer: `My favorite piece - the Hawaiian Shirt!`, q_id: 8, p_id: 1},
    {a_id: 9030, answer: `I'd go for a nice warm coat.`, q_id: 8, p_id: 2},
    {a_id: 9031, answer: `You can never go wrong with a basic hoodie!`, q_id: 8, p_id: 3},
    {a_id: 9032, answer: `I love my nice cozy hand-knit sweater. `, q_id: 8, p_id: 4},
    {a_id: 9033, answer: `I'd love to be a contestant on 'Wipeout'!`, q_id: 9, p_id: 1},
    {a_id: 9034, answer: `I'd be on 'The Chase'!`, q_id: 9, p_id: 2},
    {a_id: 9035, answer: `I would rather sit at home and binge watch game shows.`, q_id: 9, p_id: 3},
    {a_id: 9036, answer: `I would be on 'Who Wants to Be a Millionaire'! `, q_id: 9, p_id: 4},
    {a_id: 9037, answer: `I would make a house in the clouds!`, q_id: 10, p_id: 1},
    {a_id: 9038, answer: `I would live in a cave made out of ice.`, q_id: 10, p_id: 2},
    {a_id: 9039, answer: `I would love to just live in a treehouse.`, q_id: 10, p_id: 3},
    {a_id: 9040, answer: `I would want to live in a cozy cottage on a hill`, q_id: 10, p_id: 4},



  ]);
};
