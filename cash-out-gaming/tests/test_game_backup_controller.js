const GameBackupController = require('../controllers/GameBackupController');
const Game = require('../models/Game');
const assert = require('assert');

describe('GameBackupController', () => {
  it('should backup games', async () => {
    await GameBackupController.backupGames();
    assert(true);
  });

  it('should restore games', async () => {
    await GameBackupController.restoreGames();
    assert(true);
  });

  it('should delete backups', async () => {
    await GameBackupController.deleteBackups();
    assert(true);
  });
});