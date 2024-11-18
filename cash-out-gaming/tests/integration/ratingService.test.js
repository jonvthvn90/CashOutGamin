const RatingService = require('../../services/RatingService');
const ratingRepository = require('../../repositories/ratingRepository');

describe('RatingService', () => {
  it('should create a new rating', async () => {
    const rating = new RatingService();
    const newRating = await rating.createRating({ rating: 5 });
    expect(newRating).toBeInstanceOf(Object);
  });

  it('should get a rating by id', async () => {
    const rating = new RatingService();
    const ratingId = '12345';
    const ratingById = await rating.getRating(ratingId);
    expect(ratingById).toBeInstanceOf(Object);
  });

  it('should update a rating', async () => {
    const rating = new RatingService();
    const ratingId = '12345';
    const updatedRating = await rating.updateRating(ratingId, { rating: 4 });
    expect(updatedRating).toBeInstanceOf(Object);
  });

  it('should delete a rating', async () => {
    const rating = new RatingService();
    const ratingId = '12345';
    await rating.deleteRating(ratingId);
    const deletedRating = await rating.getRating(ratingId);
    expect(deletedRating).toBeNull();
  });
});