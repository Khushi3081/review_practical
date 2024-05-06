import Review from '../models/review.model';
import BaseRepository from './base.repository';

export default class ReviewRepo extends BaseRepository<Review> {
  constructor() {
    super(Review.name);
  }

}
