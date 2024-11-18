const { Game } = require('../models/Game');
const { User } = require('../models/User');

async function seed() {
  const users = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Doe', email: 'jane.doe@example.com' }
  ];

  const games = [
    { name: 'Game 1', description: 'This is game 1', userId: 1 },
    { name: 'Game 2', description: 'This is game 2', userId: 2 }
  ];

  await User.insertMany(users);
  await Game.insertMany(games);
}

seed();