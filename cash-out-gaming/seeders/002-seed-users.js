const { Game } = require('../models/Game');

async function seed() {
  const games = [
    { name: 'Game 1', description: 'This is game 1', userId: 1 },
    { name: 'Game 2', description: 'This is game 2', userId: 2 }
  ];

  await Game.insertMany(games);
}

seed();