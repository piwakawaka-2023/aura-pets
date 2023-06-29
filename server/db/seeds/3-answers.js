/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = (knex) => {
  return knex('answers').insert([
    {id: 9001, answer: `I'll be partying until the morning!`, question_id: 1, pet_id: 1},
    {id: 9002, answer: `I'd go out for a nice hike in the hills! `, question_id: 1, pet_id: 2},
    {id: 9003, answer: `*yawn* I just wanna sleep through the whole weekend.`, question_id: 1, pet_id: 3},
    {id: 9004, answer: `For me, I'd stay at home and read.`, question_id: 1, pet_id: 4},
    {id: 9005, answer: `I would love to have super speed and travel all across the world!`, question_id: 2, pet_id: 1},
    {id: 9006, answer: `Flight, of course!`, question_id: 2, pet_id: 2},
    {id: 9007, answer: `Telekinesis, so I can pick up the remote from across the room..`, question_id: 2, pet_id: 3},
    {id: 9008, answer: `I'd love to turn invisible and hide from the world.`, question_id: 2, pet_id: 4},
    {id: 9009, answer: `I'd love to visit a tropical resort and swim in the warm water. `, question_id: 3, pet_id: 1},
    {id: 9010, answer: `I'd go to a Ski Village up in the mountains! `, question_id: 3, pet_id: 2},
    {id: 9011, answer: `My ideal holiday is one where I can snuggle up in a warm cottage.`, question_id: 3, pet_id: 3},
    {id: 9012, answer: `Personally, the best holiday destination is my bed!`, question_id: 3, pet_id: 4},
    {id: 9013, answer: `Action all the way!`, question_id: 4, pet_id: 1},
    {id: 9014, answer: `I love a good thriller.`, question_id: 4, pet_id: 2},
    {id: 9015, answer: `There's nothing like a good comedy to make me laugh.`, question_id: 4, pet_id: 3},
    {id: 9016, answer: `Dramas always have me at the edge of my seat.`, question_id: 4, pet_id: 4},
    {id: 9017, answer: `I'd be getting into dramas and scandals 24/7!`, question_id: 5, pet_id: 1},
    {id: 9018, answer: `I would be super rich and have crazy mega mansions!`, question_id: 5, pet_id: 2},
    {id: 9019, answer: `I'd be known for being chill and down to earth.`, question_id: 5, pet_id: 3},
    {id: 9020, answer: `Who would want to be a celebrity? not me!`, question_id: 5, pet_id: 4},
    {id: 9021, answer: `Real or myth, I'd love to talk to Hercules!`, question_id: 6, pet_id: 1},
    {id: 9022, answer: `I would meet the great Muhammad Ali!`, question_id: 6, pet_id: 2},
    {id: 9023, answer: `Keanu Reeves! He's a historical figure to me!`, question_id: 6, pet_id: 3},
    {id: 9024, answer: `I wanna talk to the great Van Gogh!`, question_id: 6, pet_id: 4},
    {id: 9025, answer: `I would bring a sound system so I can play music as loud as I want without anyone complaining! `, question_id: 7, pet_id: 1},
    {id: 9026, answer: `I would bring a jet ski. Not to leave with, just so I can drive around the island in circles!`, question_id: 7, pet_id: 2},
    {id: 9027, answer: `I'd bring three lifetimes worth of snacks!`, question_id: 7, pet_id: 3},
    {id: 9028, answer: `For me i'd bring an entire library of books I can read until the end of time.`, question_id: 7, pet_id: 4},
    {id: 9029, answer: `My favorite piece - the Hawaiian Shirt!`, question_id: 8, pet_id: 1},
    {id: 9030, answer: `I'd go for a nice warm coat.`, question_id: 8, pet_id: 2},
    {id: 9031, answer: `You can never go wrong with a basic hoodie!`, question_id: 8, pet_id: 3},
    {id: 9032, answer: `I love my nice cozy hand-knit sweater. `, question_id: 8, pet_id: 4},
    {id: 9033, answer: `I'd love to be a contestant on 'Wipeout'!`, question_id: 9, pet_id: 1},
    {id: 9034, answer: `I'd be on 'The Chase'!`, question_id: 9, pet_id: 2},
    {id: 9035, answer: `I would rather sit at home and binge watch game shows.`, question_id: 9, pet_id: 3},
    {id: 9036, answer: `I would be on 'Who Wants to Be a Millionaire'! `, question_id: 9, pet_id: 4},
    {id: 9037, answer: `I would make a house in the clouds!`, question_id: 10, pet_id: 1},
    {id: 9038, answer: `I would live in a cave made out of ice.`, question_id: 10, pet_id: 2},
    {id: 9039, answer: `I would love to just live in a treehouse.`, question_id: 10, pet_id: 3},
    {id: 9040, answer: `I would want to live in a cozy cottage on a hill`, question_id: 10, pet_id: 4},



  ]);
};
