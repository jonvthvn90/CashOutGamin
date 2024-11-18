const express = require('express');
const router = express.Router();
const tournamentController = require('./tournament-controller');

router.get('/', async (req, res) => {
  const tournaments = await tournamentController.getAllTournaments();
  res.send(tournaments);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const tournament = await tournamentController.getTournamentById(id);
  res.send(tournament);
});

router.post('/', async (req, res) => {
  const tournament = new Tournament(req.body);
  await tournamentController.createTournament(tournament);
  res.send({ message: 'Tournament created successfully' });
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const tournament = await tournamentController.getTournamentById(id);
  tournament.name = req.body.name;
  tournament.description = req.body.description;
  await tournamentController.updateTournament(tournament);
  res.send({ message: 'Tournament updated successfully' });
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await tournamentController.deleteTournament(id);
  res.send({ message: 'Tournament deleted successfully' });
});

module.exports = router;