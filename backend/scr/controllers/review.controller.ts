import { Request, Response, NextFunction } from 'express';
import { ReviewService, BookService } from '../services';
import {
  createReviewSchema,
  updateReviewSchema,
  reviewQuerySchema,
} from '../validators';
import { AppError } from '../middleware';

export class ReviewController {
  // GET /api/v1/books/:bookId/reviews
  static async getBookReviews(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const bookId = String(req.params.bookId);
      const validatedQuery = reviewQuerySchema.parse(req.query);

      const book = BookService.getBookById(bookId);
      if (!book) {
        throw new AppError('Book not found', 404);
      }

      const { data, total } = ReviewService.getBookReviews(
        bookId,
        validatedQuery
      );

      res.json({ data, total });
    } catch (error) {
      next(error);
    }
  }

  // GET /api/v1/reviews/:id
  static async getReviewById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = String(req.params.id);

      const review = ReviewService.getReviewById(id);

      if (!review) {
        throw new AppError('Review not found', 404);
      }

      res.json({ data: review });
    } catch (error) {
      next(error);
    }
  }

  // POST /api/v1/books/:bookId/reviews
  static async createReview(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const bookId = String(req.params.bookId);
      const validatedData = createReviewSchema.parse(req.body);

      const book = BookService.getBookById(bookId);
      if (!book) {
        throw new AppError('Book not found', 404);
      }

      const newReview = ReviewService.createReview(bookId, validatedData);

      res.status(201).json({ data: newReview });
    } catch (error) {
      next(error);
    }
  }

  // PUT /api/v1/reviews/:id
  static async updateReview(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = String(req.params.id);
      const validatedData = updateReviewSchema.parse(req.body);

      const updatedReview = ReviewService.updateReview(id, validatedData);

      if (!updatedReview) {
        throw new AppError('Review not found', 404);
      }

      res.json({ data: updatedReview });
    } catch (error) {
      next(error);
    }
  }

  // DELETE /api/v1/reviews/:id
  static async deleteReview(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = String(req.params.id);

      const deleted = ReviewService.deleteReview(id);

      if (!deleted) {
        throw new AppError('Review not found', 404);
      }

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}