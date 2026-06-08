"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const services_1 = require("../services");
const validators_1 = require("../validators");
const middleware_1 = require("../middleware");
const genres_1 = require("../data/genres");
class BookController {
    // GET /api/v1/books
    static async getAllBooks(req, res, next) {
        try {
            const validatedQuery = validators_1.bookQuerySchema.parse(req.query);
            const { data, total } = services_1.BookService.getAllBooks(validatedQuery);
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
        }
        catch (error) {
            next(error);
        }
    }
    // GET /api/v1/books/:id
    static async getBookById(req, res, next) {
        try {
            const id = String(req.params.id);
            const book = services_1.BookService.getBookById(id);
            if (!book) {
                throw new middleware_1.AppError('Книга не найдена', 404);
            }
            res.json({ data: book });
        }
        catch (error) {
            next(error);
        }
    }
    // POST /api/v1/books
    static async createBook(req, res, next) {
        try {
            const validatedData = validators_1.createBookSchema.parse(req.body);
            if (!services_1.BookService.checkAuthorExists(validatedData.authorId)) {
                throw new middleware_1.AppError('Author not found', 404);
            }
            if (!services_1.BookService.checkPublisherExists(validatedData.publisherId)) {
                throw new middleware_1.AppError('Publisher not found', 404);
            }
            for (const genreId of validatedData.genreIds) {
                const genreExists = genres_1.genres.some(g => g.id === genreId);
                if (!genreExists) {
                    throw new middleware_1.AppError(`Genre with id ${genreId} not found`, 404);
                }
            }
            const newBook = services_1.BookService.createBook(validatedData);
            res.status(201).json({ data: newBook });
        }
        catch (error) {
            next(error);
        }
    }
    // PUT /api/v1/books/:id
    static async updateBook(req, res, next) {
        try {
            const id = String(req.params.id);
            const validatedData = validators_1.updateBookSchema.parse(req.body);
            const updatedBook = services_1.BookService.updateBook(id, validatedData);
            if (!updatedBook) {
                throw new middleware_1.AppError('Книга не найдена', 404);
            }
            res.json({ data: updatedBook });
        }
        catch (error) {
            next(error);
        }
    }
    // DELETE /api/v1/books/:id
    static async deleteBook(req, res, next) {
        try {
            const id = String(req.params.id);
            const deleted = services_1.BookService.deleteBook(id);
            if (!deleted) {
                throw new middleware_1.AppError('Книга не найдена', 404);
            }
            res.status(204).send();
        }
        catch (error) {
            next(error);
        }
    }
    // GET /api/v1/books/:id/reviews
    static async getBookReviews(req, res, next) {
        try {
            const id = String(req.params.id);
            const book = services_1.BookService.getBookById(id);
            if (!book) {
                throw new middleware_1.AppError('Книга не найдена', 404);
            }
            const reviews = services_1.BookService.getBookReviews(id);
            res.json({ data: reviews });
        }
        catch (error) {
            next(error);
        }
    }
    // GET /api/v1/books/:id/average-rating
    static async getAverageRating(req, res, next) {
        try {
            const id = String(req.params.id);
            const book = services_1.BookService.getBookById(id);
            if (!book) {
                throw new middleware_1.AppError('Книга не найдена', 404);
            }
            const averageRating = services_1.BookService.getAverageRating(id);
            res.json({
                data: {
                    bookId: id,
                    averageRating,
                    totalReviews: services_1.BookService.getBookReviews(id).length,
                },
            });
        }
        catch (error) {
            next(error);
        }
    }
    // POST /api/v1/books/:id/reviews
    static async createReview(req, res, next) {
        try {
            const id = String(req.params.id);
            const validatedData = validators_1.createReviewSchema.parse(req.body);
            const book = services_1.BookService.getBookById(id);
            if (!book) {
                throw new middleware_1.AppError('Book not found', 404);
            }
            const newReview = services_1.ReviewService.createReview(id, validatedData);
            res.status(201).json({ data: newReview });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.BookController = BookController;
