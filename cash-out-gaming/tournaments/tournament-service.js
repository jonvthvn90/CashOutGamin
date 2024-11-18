const Tournament = require('./tournament-model');

const startTournament = async (tournament) => {
  // Start the tournament logic here
  console.log('Starting tournament...');
  // Simulate a tournament process
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  console.log('Tournament started!');
};

const endTournament = async (tournament) => {
  // End the tournament logic here
  console.log('Ending tournament...');
  // Simulate a tournament process
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  console.log('Tournament ended!');
};

module.exports = {
  startTournament,
  endTournament,
};