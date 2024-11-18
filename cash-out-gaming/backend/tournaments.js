const _ = require(‘lodash’); 

// Create tournament logic 
const createTournament = (players) => { 
  // Create tournament logic here 
  const tournament = []; 
  for (let i = 0; i < players.length; i++) { 
    tournament.push(players[i]); 
  } 
  _.shuffle(tournament); 
  return tournament; 
}; 

const addGame = (game) => { 
  // Add game logic here 
  const games = []; 
  games.push(game); 
  return games; 
}; 

const setAdmissionFee = (fee) => { 
  // Set admission fee logic here 
  const admissionFee = fee; 
  return admissionFee; 
}; 

const selectTournamentFormat = (format) => { 
  // Select tournament format logic here 
  const tournamentFormat = format; 
  return tournamentFormat; 
};