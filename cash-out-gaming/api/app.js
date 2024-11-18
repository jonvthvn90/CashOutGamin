import express from 'express';
import gameRoutes from './routes/gameRoutes';
import userRoutes from './routes/userRoutes';

const express = require('express');
const app = express();
const gameController = require('./controllers/GameController');
const userController = require('./controllers/UserController');
const gameFeedbackController = require('./controllers/GameFeedbackController');
const gameRatingController = require('./controllers/GameRatingController');
const gameReviewController = require('./controllers/GameReviewController');
const gameSearchController = require('./controllers/GameSearchController');
const gameFilterController = require('./controllers/GameFilterController');
const gameSortController = require('./controllers/GameSortController');
const gamePaginationController = require('./controllers/GamePaginationController');
const gameCacheController = require('./controllers/GameCacheController');
const gameErrorHandlingController = require('./controllers/GameErrorHandlingController');
const gameLoggingController = require('./controllers/GameLoggingController');
const gameMonitoringController = require('./controllers/GameMonitoringController');
const gameSecurityController = require('./controllers/GameSecurityController');
const gameBackupController = require('./controllers/GameBackupController');
const gameRestoreController = require('./controllers/GameRestoreController');
const gameUpdateController = require('./controllers/GameUpdateController');
const gameDeleteController = require('./controllers/GameDeleteController');
const gameExportController = require('./controllers/GameExportController');
const gameImportController = require('./controllers/GameImportController');
const gameValidationController = require('./controllers/GameValidationController');
const gameSanitizationController = require('./controllers/GameSanitizationController');
const gameAuthenticationController = require('./controllers/GameAuthenticationController');
const gameAuthorizationController = require('./controllers/GameAuthorizationController');
const gameRoutes = require('./routes/gameRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/games', gameRoutes);
app.use('/users', userRoutes);
app.use('/games', gameController);
app.use('/users', userController);
app.use('/gameFeedback', gameFeedbackController);
app.use('/gameRating', gameRatingController);
app.use('/gameReview', gameReviewController);
app.use('/gameSearch', gameSearchController);
app.use('/gameFilter', gameFilterController);
app.use('/gameSort', gameSortController);
app.use('/gamePagination', gamePaginationController);
app.use('/gameCache', gameCacheController);
app.use('/gameErrorHandling', gameErrorHandlingController);
app.use('/gameLogging', gameLoggingController);
app.use('/gameMonitoring', gameMonitoringController);
app.use('/gameSecurity', gameSecurityController);
app.use('/gameBackup', gameBackupController);
app.use('/gameRestore', gameRestoreController);
app.use('/gameUpdate', gameUpdateController);
app.use('/gameDelete', gameDeleteController);
app.use('/gameExport', gameExportController);
app.use('/gameImport', gameImportController);
app.use('/gameValidation', gameValidationController);
app.use('/gameSanitization', gameSanitizationController);
app.use('/gameAuthentication', gameAuthenticationController);
app.use('/gameAuthorization', gameAuthorizationController);

router.get('/', (req, res) => {
  res.json({ message: 'API endpoint' });
});

module.exports = router;
app.listen(3000, () => {
  console.log('Server started on port 3000');
});