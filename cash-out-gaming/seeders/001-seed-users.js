const { User } = require('../models/User');

async function seed() {
  const users = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Doe', email: 'jane.doe@example.com' }
  ];

  await User.insertMany(users);
}

seed();