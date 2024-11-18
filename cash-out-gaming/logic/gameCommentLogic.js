const Game = require('./game');
const Comment = require('./comment');

const gameCommentLogic = {
  async createGameComment(gameId, comment) {
    const game = await Game.findById(gameId);
    if (!game) return { error: 'Game not found' };
    const newComment = new Comment({ gameId: gameId, comment: comment });
    await newComment.save();
    return newComment;
  }
};

module.exports = gameCommentLogic;