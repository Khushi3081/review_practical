import { NextFunction, Request, Response } from 'express';
import ReviewRepo from '../repository/review.reository';
import Review from '../models/review.model';

export class ReviewController {
  constructor(public readonly reviewRepository: ReviewRepo) {}

  public readonly getAllData = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await Review.findAll();
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send('Data not found');
    }
  };

  public readonly addReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reviewData = await Review.create({
        ...req.body.formData,
      });
      res.status(200).send('success');
    } catch (error) {
      console.log(error.message);

      res.status(404).send('failure');
    }
  };

  public readonly getReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await Review.findAll({
        where: {
          uuid: req.params.id,
        },
      });
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send('Data not found');
    }
  };
  public readonly updateReview = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const { id } = req.params;
console.log(id);

      const findReview = await Review.findOne({
        where: {
          uuid: id as unknown as number,
        },
      });
      if (!findReview) {
        return res.status(404).send('failure');
      }
      const updateData = await Review.update({...req.body.formData},{where:{
        uuid:id as unknown
      }});
      res.status(200).send('success');
  
    } catch (error) {
      console.log(error);
      
    }
     };

  public readonly deleteReview = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.query;

    const findReview = await Review.findOne({
      where: {
        uuid: id as unknown as number,
      },
    });
    if (!findReview) {
      return res.status(404).send('failure');
    }
    const deleteData = await Review.destroy({
      where: {
        uuid: id as unknown as number,
      },
    });
    res.status(200).send('success');
  };
}
