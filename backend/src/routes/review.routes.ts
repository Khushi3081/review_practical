interface Routes {
    path?: string;
    router: Router;
  }
import { Router } from 'express';
import { ReviewController } from '../controller/review.controller';
import ReviewRepo from '../repository/review.reository';
class ReviewRoute implements Routes {
  public path = '/review';
  public router = Router();
  public reviewController = new ReviewController(new ReviewRepo());
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.route(`${this.path}/getAll`).get(this.reviewController.getAllData);
    this.router.route(`${this.path}/add`).post(this.reviewController.addReview);
    this.router.route(`${this.path}/getOne/:id`).get(this.reviewController.getReview);
    this.router.route(`${this.path}/update/:id`).put(this.reviewController.updateReview);
    this.router.route(`${this.path}/delete/:id`).delete(this.reviewController.deleteReview);

  }
}
export default ReviewRoute;
