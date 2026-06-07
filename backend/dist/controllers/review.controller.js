"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewController = void 0;
const services_1 = require("../services");
const services_2 = require("../services");
const validators_1 = require("../validators");
const middleware_1 = require("../middleware");
class ReviewController {
    // ПОЛУЧИТЬ /api/v1/books/:bookId/reviews
    static async getBookReviews(req, res, next) {
        try {
            const bookId = String(req.params.bookId);
            const validatedQuery = validators_1.reviewQuerySchema.parse(req.query);
            const book = services_2.BookService.getBookById(bookId);
            if (!book) {
                throw new middleware_1.AppError('Книга не найдена', 404);
            }
            const { data, total } = services_1.ReviewService.getBookReviews(bookId, validatedQuery);
            res.json({ data, total });
        }
        catch (error) {
            next(error);
        }
    }
    // ПОЛУЧИТЬ /api/v1/reviews/:id
    static async getReviewById(req, res, next) {
        try {
            const id = String(req.params.id);
            const review = services_1.ReviewService.getReviewById(id);
            if (!review) {
                throw new middleware_1.AppError('Отзыв не найден', 404);
            }
            res.json({ data: review });
        }
        catch (error) {
            next(error);
        }
    }
    // СОЗДАТЬ /api/v1/books/:bookId/reviews
    static async createReview(req, res, next) {
        try {
            const bookId = String(req.params.bookId);
            const validatedData = validators_1.createReviewSchema.parse(req.body);
            const book = services_2.BookService.getBookById(bookId);
            if (!book) {
                throw new middleware_1.AppError('Книга не найдена', 404);
            }
            const newReview = services_1.ReviewService.createReview(bookId, validatedData);
            res.status(201).json({
                data: newReview
            });
        }
        catch (error) {
            next(error);
        }
    }
    // ОБНОВИТЬ /api/v1/reviews/:id
    static async updateReview(req, res, next) {
        try {
            const id = String(req.params.id);
            const validatedData = validators_1.updateReviewSchema.parse(req.body);
            const updatedReview = services_1.ReviewService.updateReview(id, validatedData);
            if (!updatedReview) {
                throw new middleware_1.AppError('Отзыв не найден', 404);
            }
            res.json({
                data: updatedReview
            });
        }
        catch (error) {
            next(error);
        }
    }
    // УДАЛИТЬ /api/v1/reviews/:id
    static async deleteReview(req, res, next) {
        try {
            const id = String(req.params.id);
            const deleted = services_1.ReviewService.deleteReview(id);
            if (!deleted) {
                throw new middleware_1.AppError('Отзыв не найден', 404);
            }
            res.status(204).send();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ReviewController = ReviewController;
