"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const controllers_2 = require("../controllers"); // Добавляем импорт ReviewController
const router = (0, express_1.Router)();
// GET /api/v1/books - получить все книги
router.get('/', controllers_1.BookController.getAllBooks);
// POST /api/v1/books - создать новую книгу
router.post('/', controllers_1.BookController.createBook);
// GET /api/v1/books/:id/reviews - получить отзывы книги
router.get('/:id/reviews', controllers_1.BookController.getBookReviews);
// POST /api/v1/books/:id/reviews - создать отзыв для книги (ДОБАВЛЯЕМ!)
router.post('/:id/reviews', controllers_2.ReviewController.createReview);
// GET /api/v1/books/:id/average-rating - получить средний рейтинг
router.get('/:id/average-rating', controllers_1.BookController.getAverageRating);
// GET /api/v1/books/:id - получить книгу по ID
router.get('/:id', controllers_1.BookController.getBookById);
// PUT /api/v1/books/:id - обновить книгу
router.put('/:id', controllers_1.BookController.updateBook);
// DELETE /api/v1/books/:id - удалить книгу
router.delete('/:id', controllers_1.BookController.deleteBook);
exports.default = router;
