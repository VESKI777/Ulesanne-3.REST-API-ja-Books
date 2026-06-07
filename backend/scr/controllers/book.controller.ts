import { Request, Response, NextFunction } from 'express';
import { BookService } from '../services';
import {
  createBookSchema,
  updateBookSchema,
  bookQuerySchema,
} from '../validators';
import { AppError } from '../middleware';

export class BookController {
  // ПОЛУЧИТЬ /api/v1/books
  static async getAllBooks(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const validatedQuery = bookQuerySchema.parse(req.query);
      const { data, total } = BookService.getAllBooks(validatedQuery);

      const page = parseInt(validatedQuery.page || '1');
      const limit = parseInt(validatedQuery.limit || '10');
      const totalPages = Math.ceil(total / limit);

      res.json({
        data,
        pagination: {
          currentPage: page,
          totalPages,
          totalItems: total,
          itemsPerPage: limit,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // ПОЛУЧИТЬ /api/v1/books/:id
  static async getBookById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = String(req.params.id);

      const book = BookService.getBookById(id);

      if (!book) {
        throw new AppError('Книга не найдена', 404);
      }

      res.json({ data: book });
    } catch (error) {
      next(error);
    }
  }

  // СОЗДАТЬ /api/v1/books
  static async createBook(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const validatedData = createBookSchema.parse(req.body);

      if (!BookService.checkAuthorExists(validatedData.authorId)) {
        throw new AppError('Автор не найден', 404);
      }

      if (!BookService.checkPublisherExists(validatedData.publisherId)) {
        throw new AppError('Издательство не найдено', 404);
      }

      const newBook = BookService.createBook(validatedData);

      res.status(201).json({
        data: newBook,
      });
    } catch (error) {
      next(error);
    }
  }

  // ОБНОВИТЬ /api/v1/books/:id
  static async updateBook(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = String(req.params.id);
      const validatedData = updateBookSchema.parse(req.body);

      const updatedBook = BookService.updateBook(id, validatedData);

      if (!updatedBook) {
        throw new AppError('Книга не найдена', 404);
      }

      res.json({
        data: updatedBook,
      });
    } catch (error) {
      next(error);
    }
  }

  // УДАЛИТЬ /api/v1/books/:id
  static async deleteBook(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = String(req.params.id);

      const deleted = BookService.deleteBook(id);

      if (!deleted) {
        throw new AppError('Книга не найдена', 404);
      }

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  // ПОЛУЧИТЬ /api/v1/books/:id/reviews
  static async getBookReviews(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = String(req.params.id);

      const book = BookService.getBookById(id);

      if (!book) {
        throw new AppError('Книга не найдена', 404);
      }

      const reviews = BookService.getBookReviews(id);

      res.json({
        data: reviews,
      });
    } catch (error) {
      next(error);
    }
  }

  // ПОЛУЧИТЬ /api/v1/books/:id/average-rating
  static async getAverageRating(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = String(req.params.id);

      const book = BookService.getBookById(id);

      if (!book) {
        throw new AppError('Книга не найдена', 404);
      }

      const averageRating = BookService.getAverageRating(id);

      res.json({
        data: {
          bookId: id,
          averageRating,
          totalReviews: BookService.getBookReviews(id).length,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}