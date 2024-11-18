const CommentService = require('../../services/CommentService');
const commentRepository = require('../../repositories/commentRepository');

describe('CommentService', () => {
  it('should create a new comment', async () => {
    const comment = new CommentService();
    const newComment = await comment.createComment({ text: 'This is a test comment' });
    expect(newComment).toBeInstanceOf(Object);
  });

  it('should get a comment by id', async () => {
    const comment = new CommentService();
    const commentId = '12345';
    const commentById = await comment.getComment(commentId);
    expect(commentById).toBeInstanceOf(Object);
  });

  it('should update a comment', async () => {
    const comment = new CommentService();
    const commentId = '12345';
    const updatedComment = await comment.updateComment(commentId, { text: 'Updated test comment' });
    expect(updatedComment).toBeInstanceOf(Object);
  });

  it('should delete a comment', async () => {
    const comment = new CommentService();
    const commentId = '12345';
    await comment.deleteComment(commentId);
    const deletedComment = await comment.getComment(commentId);
    expect(deletedComment).toBeNull();
  });
});